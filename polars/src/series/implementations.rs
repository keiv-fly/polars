use super::private;
use super::SeriesTrait;
use crate::chunked_array::ops::aggregate::{ChunkAggSeries, VarAggSeries};
use crate::datatypes::ArrowDataType;
use crate::fmt::FmtList;
use crate::frame::group_by::*;
use crate::frame::hash_join::{HashJoin, ZipOuterJoinColumn};
use crate::prelude::*;
use arrow::array::{ArrayDataRef, ArrayRef};
use arrow::buffer::Buffer;
use regex::internal::Input;
use std::ops::Deref;

pub(crate) struct Wrap<T>(pub T);

impl<T> From<ChunkedArray<T>> for Wrap<ChunkedArray<T>> {
    fn from(ca: ChunkedArray<T>) -> Self {
        Wrap(ca)
    }
}

impl<T> Deref for Wrap<ChunkedArray<T>> {
    type Target = ChunkedArray<T>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl<'a, T> AsRef<ChunkedArray<T>> for dyn SeriesTrait + 'a
where
    T: 'static + PolarsDataType,
{
    fn as_ref(&self) -> &ChunkedArray<T> {
        if &T::get_data_type() == self.dtype() {
            unsafe { &*(self as *const dyn SeriesTrait as *const ChunkedArray<T>) }
        } else {
            panic!("implementation error")
        }
    }
}

macro_rules! impl_dyn_series {
    ($ca: ident) => {
        impl private::PrivateSeries for Wrap<$ca> {
            fn agg_mean(&self, groups: &[(usize, Vec<usize>)]) -> Option<Series> {
                self.0.agg_mean(groups)
            }

            fn agg_min(&self, groups: &[(usize, Vec<usize>)]) -> Option<Series> {
                self.0.agg_min(groups)
            }

            fn agg_max(&self, groups: &[(usize, Vec<usize>)]) -> Option<Series> {
                self.0.agg_max(groups)
            }

            fn agg_sum(&self, groups: &[(usize, Vec<usize>)]) -> Option<Series> {
                self.0.agg_sum(groups)
            }

            fn agg_first(&self, groups: &[(usize, Vec<usize>)]) -> Series {
                self.0.agg_first(groups)
            }

            fn agg_last(&self, groups: &[(usize, Vec<usize>)]) -> Series {
                self.0.agg_last(groups)
            }

            fn agg_n_unique(&self, groups: &[(usize, Vec<usize>)]) -> Option<UInt32Chunked> {
                self.0.agg_n_unique(groups)
            }

            fn agg_list(&self, groups: &[(usize, Vec<usize>)]) -> Option<Series> {
                self.0.agg_list(groups)
            }

            fn agg_quantile(
                &self,
                groups: &[(usize, Vec<usize>)],
                quantile: f64,
            ) -> Option<Series> {
                self.0.agg_quantile(groups, quantile)
            }

            fn agg_median(&self, groups: &[(usize, Vec<usize>)]) -> Option<Series> {
                self.0.agg_median(groups)
            }

            fn pivot<'a>(
                &self,
                pivot_series: &'a (dyn SeriesTrait + 'a),
                keys: Vec<Series>,
                groups: &[(usize, Vec<usize>)],
                agg_type: PivotAgg,
            ) -> Result<DataFrame> {
                self.0.pivot(pivot_series, keys, groups, agg_type)
            }

            fn pivot_count<'a>(
                &self,
                pivot_series: &'a (dyn SeriesTrait + 'a),
                keys: Vec<Series>,
                groups: &[(usize, Vec<usize>)],
            ) -> Result<DataFrame> {
                self.0.pivot_count(pivot_series, keys, groups)
            }
            fn hash_join_inner(&self, other: &Series) -> Vec<(usize, usize)> {
                HashJoin::hash_join_inner(&self.0, other.as_ref().as_ref())
            }
            fn hash_join_left(&self, other: &Series) -> Vec<(usize, Option<usize>)> {
                HashJoin::hash_join_left(&self.0, other.as_ref().as_ref())
            }
            fn hash_join_outer(&self, other: &Series) -> Vec<(Option<usize>, Option<usize>)> {
                HashJoin::hash_join_outer(&self.0, other.as_ref().as_ref())
            }
            fn zip_outer_join_column(
                &self,
                right_column: &Series,
                opt_join_tuples: &[(Option<usize>, Option<usize>)],
            ) -> Series {
                ZipOuterJoinColumn::zip_outer_join_column(&self.0, right_column, opt_join_tuples)
            }
            fn subtract(&self, rhs: &Series) -> Result<Series> {
                NumOpsDispatch::subtract(&self.0, rhs)
            }
            fn add_to(&self, rhs: &Series) -> Result<Series> {
                NumOpsDispatch::add_to(&self.0, rhs)
            }
            fn multiply(&self, rhs: &Series) -> Result<Series> {
                NumOpsDispatch::multiply(&self.0, rhs)
            }
            fn divide(&self, rhs: &Series) -> Result<Series> {
                NumOpsDispatch::divide(&self.0, rhs)
            }
            fn remainder(&self, rhs: &Series) -> Result<Series> {
                NumOpsDispatch::remainder(&self.0, rhs)
            }
            fn group_tuples(&self) -> Vec<(usize, Vec<usize>)> {
                IntoGroupTuples::group_tuples(&self.0)
            }
        }

        impl SeriesTrait for Wrap<$ca> {
            fn rename(&mut self, name: &str) {
                self.0.rename(name);
            }

            fn array_data(&self) -> Vec<ArrayDataRef> {
                self.0.array_data()
            }

            fn chunk_lengths(&self) -> &Vec<usize> {
                self.0.chunk_id()
            }
            /// Name of series.
            fn name(&self) -> &str {
                self.0.name()
            }

            /// Get field (used in schema)
            fn field(&self) -> &Field {
                self.0.ref_field()
            }

            /// Get datatype of series.
            fn dtype(&self) -> &ArrowDataType {
                self.field().data_type()
            }

            /// Underlying chunks.
            fn chunks(&self) -> &Vec<ArrayRef> {
                self.0.chunks()
            }

            /// No. of chunks
            fn n_chunks(&self) -> usize {
                self.0.chunks().len()
            }

            fn i8(&self) -> Result<&Int8Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::Int8) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const Int8Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into i8",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            fn i16(&self) -> Result<&Int16Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::Int16) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const Int16Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into i16",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            /// ```
            /// # use polars::prelude::*;
            /// let s: Series = [1, 2, 3].iter().collect();
            /// let s_squared: Series = s.i32()
            ///     .unwrap()
            ///     .into_iter()
            ///     .map(|opt_v| {
            ///         match opt_v {
            ///             Some(v) => Some(v * v),
            ///             None => None, // null value
            ///         }
            /// }).collect();
            /// ```
            fn i32(&self) -> Result<&Int32Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::Int32) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const Int32Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into i32",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn i64(&self) -> Result<&Int64Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::Int64) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const Int64Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into i64",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn f32(&self) -> Result<&Float32Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::Float32) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const Float32Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into f32",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn f64(&self) -> Result<&Float64Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::Float64) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const Float64Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into f64",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn u8(&self) -> Result<&UInt8Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::UInt8) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const UInt8Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into u8",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn u16(&self) -> Result<&UInt16Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::UInt16) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const UInt16Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into u16",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn u32(&self) -> Result<&UInt32Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::UInt32) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const UInt32Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into u32",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn u64(&self) -> Result<&UInt64Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::UInt64) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const UInt64Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into u64",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn bool(&self) -> Result<&BooleanChunked> {
                if matches!(self.0.dtype(), ArrowDataType::Boolean) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const BooleanChunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into bool",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn utf8(&self) -> Result<&Utf8Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::Utf8) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const Utf8Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into utf8",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn date32(&self) -> Result<&Date32Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::Date32(DateUnit::Day)) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const Date32Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into date32",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn date64(&self) -> Result<&Date64Chunked> {
                if matches!(self.0.dtype(), ArrowDataType::Date64(DateUnit::Day)) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const Date64Chunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into date64",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn time64_nanosecond(&self) -> Result<&Time64NanosecondChunked> {
                if matches!(self.0.dtype(), ArrowDataType::Time64(TimeUnit::Nanosecond)) {
                    unsafe {
                        Ok(&*(self as *const dyn SeriesTrait as *const Time64NanosecondChunked))
                    }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into time64",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn duration_nanosecond(&self) -> Result<&DurationNanosecondChunked> {
                if matches!(
                    self.0.dtype(),
                    ArrowDataType::Duration(TimeUnit::Nanosecond)
                ) {
                    unsafe {
                        Ok(&*(self as *const dyn SeriesTrait as *const DurationNanosecondChunked))
                    }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into duration_nanosecond",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn duration_millisecond(&self) -> Result<&DurationMillisecondChunked> {
                if matches!(
                    self.0.dtype(),
                    ArrowDataType::Duration(TimeUnit::Millisecond)
                ) {
                    unsafe {
                        Ok(&*(self as *const dyn SeriesTrait as *const DurationMillisecondChunked))
                    }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into duration_millisecond",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            #[cfg(feature = "dtype-interval")]
            fn interval_daytime(&self) -> Result<&IntervalDayTimeChunked> {
                if matches!(
                    self.0.dtype(),
                    ArrowDataType::Interval(IntervalUnit::DayTime)
                ) {
                    unsafe {
                        Ok(&*(self as *const dyn SeriesTrait as *const IntervalDayTimeChunked))
                    }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into interval_daytime",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            #[cfg(feature = "dtype-interval")]
            fn interval_year_month(&self) -> Result<&IntervalYearMonthChunked> {
                if matches!(
                    self.0.dtype(),
                    ArrowDataType::Interval(IntervalUnit::YearMonth)
                ) {
                    unsafe {
                        Ok(&*(self as *const dyn SeriesTrait as *const IntervalYearMonthChunked))
                    }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into interval_year_month",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            /// Unpack to ChunkedArray
            fn list(&self) -> Result<&ListChunked> {
                if matches!(self.0.dtype(), ArrowDataType::List(_)) {
                    unsafe { Ok(&*(self as *const dyn SeriesTrait as *const ListChunked)) }
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        format!(
                            "cannot unpack Series: {:?} of type {:?} into list",
                            self.name(),
                            self.dtype(),
                        )
                        .into(),
                    ))
                }
            }

            fn append_array(&mut self, other: ArrayRef) -> Result<()> {
                self.0.append_array(other)
            }

            /// Take `num_elements` from the top as a zero copy view.
            fn limit(&self, num_elements: usize) -> Result<Series> {
                self.0.limit(num_elements).map(|ca| ca.into_series())
            }

            /// Get a zero copy view of the data.
            fn slice(&self, offset: usize, length: usize) -> Result<Series> {
                self.0.slice(offset, length).map(|ca| ca.into_series())
            }

            /// Append a Series of the same type in place.
            fn append(&mut self, other: &Series) -> Result<()> {
                if self.0.dtype() == other.dtype() {
                    // todo! add object
                    self.0.append(other.as_ref().as_ref());
                    Ok(())
                } else {
                    Err(PolarsError::DataTypeMisMatch(
                        "cannot append Series; data types don't match".into(),
                    ))
                }
            }

            /// Filter by boolean mask. This operation clones data.
            fn filter(&self, filter: &BooleanChunked) -> Result<Series> {
                ChunkFilter::filter(&self.0, filter).map(|ca| ca.into_series())
            }

            /// Take by index from an iterator. This operation clones the data.
            ///
            /// # Safety
            ///
            /// Out of bounds access doesn't Error but will return a Null value
            fn take_iter(
                &self,
                iter: &mut dyn Iterator<Item = usize>,
                capacity: Option<usize>,
            ) -> Series {
                ChunkTake::take(&self.0, iter, capacity).into_series()
            }

            /// Take by index from an iterator. This operation clones the data.
            ///
            /// # Safety
            ///
            /// This doesn't check any bounds or null validity.
            unsafe fn take_iter_unchecked(
                &self,
                iter: &mut dyn Iterator<Item = usize>,
                capacity: Option<usize>,
            ) -> Series {
                ChunkTake::take_unchecked(&self.0, iter, capacity).into_series()
            }

            /// Take by index if ChunkedArray contains a single chunk.
            ///
            /// # Safety
            /// This doesn't check any bounds. Null validity is checked.
            unsafe fn take_from_single_chunked(&self, idx: &UInt32Chunked) -> Result<Series> {
                ChunkTake::take_from_single_chunked(&self.0, idx).map(|ca| ca.into_series())
            }

            /// Take by index from an iterator. This operation clones the data.
            ///
            /// # Safety
            ///
            /// This doesn't check any bounds or null validity.
            unsafe fn take_opt_iter_unchecked(
                &self,
                iter: &mut dyn Iterator<Item = Option<usize>>,
                capacity: Option<usize>,
            ) -> Series {
                ChunkTake::take_opt_unchecked(&self.0, iter, capacity).into_series()
            }

            /// Take by index from an iterator. This operation clones the data.
            ///
            /// # Safety
            ///
            /// Out of bounds access doesn't Error but will return a Null value
            fn take_opt_iter(
                &self,
                iter: &mut dyn Iterator<Item = Option<usize>>,
                capacity: Option<usize>,
            ) -> Series {
                ChunkTake::take_opt(&self.0, iter, capacity).into_series()
            }

            /// Take by index. This operation is clone.
            ///
            /// # Safety
            ///
            /// Out of bounds access doesn't Error but will return a Null value
            fn take(&self, indices: &dyn AsTakeIndex) -> Series {
                let mut iter = indices.as_take_iter();
                let capacity = indices.take_index_len();
                self.0.take(&mut iter, Some(capacity)).into_series()
            }

            /// Get length of series.
            fn len(&self) -> usize {
                self.0.len()
            }

            /// Check if Series is empty.
            fn is_empty(&self) -> bool {
                self.0.is_empty()
            }

            /// Aggregate all chunks to a contiguous array of memory.
            fn rechunk(&self, chunk_lengths: Option<&[usize]>) -> Result<Series> {
                ChunkOps::rechunk(&self.0, chunk_lengths).map(|ca| ca.into_series())
            }

            /// Get the head of the Series.
            fn head(&self, length: Option<usize>) -> Series {
                self.0.head(length).into_series()
            }

            /// Get the tail of the Series.
            fn tail(&self, length: Option<usize>) -> Series {
                self.0.tail(length).into_series()
            }

            /// Drop all null values and return a new Series.
            fn drop_nulls(&self) -> Series {
                if self.null_count() == 0 {
                    self.0.clone().into_series()
                } else {
                    ChunkFilter::filter(&self.0, &self.is_not_null())
                        .unwrap()
                        .into_series()
                }
            }

            /// Create a new Series filled with values at that index.
            ///
            /// # Example
            ///
            /// ```rust
            /// use polars::prelude::*;
            /// let s = Series::new("a", [0i32, 1, 8]);
            /// let expanded = s.expand_at_index(2, 4);
            /// assert_eq!(Vec::from(expanded.i32().unwrap()), &[Some(8), Some(8), Some(8), Some(8)])
            /// ```
            fn expand_at_index(&self, index: usize, length: usize) -> Series {
                ChunkExpandAtIndex::expand_at_index(&self.0, index, length).into_series()
            }

            fn cast_with_arrow_datatype(&self, data_type: &ArrowDataType) -> Result<Series> {
                use ArrowDataType::*;
                match data_type {
                    Boolean => ChunkCast::cast::<BooleanType>(&self.0).map(|ca| ca.into_series()),
                    Utf8 => ChunkCast::cast::<Utf8Type>(&self.0).map(|ca| ca.into_series()),
                    UInt8 => ChunkCast::cast::<UInt8Type>(&self.0).map(|ca| ca.into_series()),
                    UInt16 => ChunkCast::cast::<UInt16Type>(&self.0).map(|ca| ca.into_series()),
                    UInt32 => ChunkCast::cast::<UInt32Type>(&self.0).map(|ca| ca.into_series()),
                    UInt64 => ChunkCast::cast::<UInt64Type>(&self.0).map(|ca| ca.into_series()),
                    Int8 => ChunkCast::cast::<Int8Type>(&self.0).map(|ca| ca.into_series()),
                    Int16 => ChunkCast::cast::<Int16Type>(&self.0).map(|ca| ca.into_series()),
                    Int32 => ChunkCast::cast::<Int32Type>(&self.0).map(|ca| ca.into_series()),
                    Int64 => ChunkCast::cast::<Int64Type>(&self.0).map(|ca| ca.into_series()),
                    Float32 => ChunkCast::cast::<Float32Type>(&self.0).map(|ca| ca.into_series()),
                    Float64 => ChunkCast::cast::<Float64Type>(&self.0).map(|ca| ca.into_series()),
                    Date32(_) => ChunkCast::cast::<Date32Type>(&self.0).map(|ca| ca.into_series()),
                    Date64(_) => ChunkCast::cast::<Date64Type>(&self.0).map(|ca| ca.into_series()),
                    Time64(TimeUnit::Nanosecond) => {
                        ChunkCast::cast::<Time64NanosecondType>(&self.0).map(|ca| ca.into_series())
                    }
                    Duration(TimeUnit::Nanosecond) => {
                        ChunkCast::cast::<DurationNanosecondType>(&self.0)
                            .map(|ca| ca.into_series())
                    }
                    Duration(TimeUnit::Millisecond) => {
                        ChunkCast::cast::<DurationMillisecondType>(&self.0)
                            .map(|ca| ca.into_series())
                    }
                    #[cfg(feature = "dtype-interval")]
                    Interval(IntervalUnit::DayTime) => {
                        ChunkCast::cast::<IntervalDayTimeType>(&self.0).map(|ca| ca.into_series())
                    }
                    #[cfg(feature = "dtype-interval")]
                    Interval(IntervalUnit::YearMonth) => {
                        ChunkCast::cast::<IntervalYearMonthType>(&self.0).map(|ca| ca.into_series())
                    }
                    List(_) => ChunkCast::cast::<ListType>(&self.0).map(|ca| ca.into_series()),
                    dt => Err(PolarsError::Other(
                        format!("Casting to {:?} is not supported", dt).into(),
                    )),
                }
            }

            /// Create dummy variables. See [DataFrame](DataFrame::to_dummies)
            fn to_dummies(&self) -> Result<DataFrame> {
                ToDummies::to_dummies(&self.0)
            }

            fn value_counts(&self) -> Result<DataFrame> {
                ChunkUnique::value_counts(&self.0)
            }

            /// Get a single value by index. Don't use this operation for loops as a runtime cast is
            /// needed for every iteration.
            fn get(&self, index: usize) -> AnyType {
                self.0.get_any(index)
            }

            /// Sort in place.
            fn sort_in_place(&mut self, reverse: bool) {
                ChunkSort::sort_in_place(&mut self.0, reverse);
            }

            fn sort(&self, reverse: bool) -> Series {
                ChunkSort::sort(&self.0, reverse).into_series()
            }

            /// Retrieve the indexes needed for a sort.
            fn argsort(&self, reverse: bool) -> Vec<usize> {
                ChunkSort::argsort(&self.0, reverse)
            }

            /// Count the null values.
            fn null_count(&self) -> usize {
                self.0.null_count()
            }

            /// Get unique values in the Series.
            fn unique(&self) -> Result<Series> {
                ChunkUnique::unique(&self.0).map(|ca| ca.into_series())
            }

            /// Get unique values in the Series.
            fn n_unique(&self) -> Result<usize> {
                ChunkUnique::n_unique(&self.0)
            }

            /// Get first indexes of unique values.
            fn arg_unique(&self) -> Result<Vec<usize>> {
                ChunkUnique::arg_unique(&self.0)
            }

            /// Get indexes that evaluate true
            fn arg_true(&self) -> Result<UInt32Chunked> {
                let ca: &BooleanChunked = self.bool()?;
                Ok(ca.arg_true())
            }

            /// Get a mask of the null values.
            fn is_null(&self) -> BooleanChunked {
                self.0.is_null()
            }

            /// Get a mask of the non-null values.
            fn is_not_null(&self) -> BooleanChunked {
                self.0.is_not_null()
            }

            /// Get a mask of all the unique values.
            fn is_unique(&self) -> Result<BooleanChunked> {
                ChunkUnique::is_unique(&self.0)
            }

            /// Get a mask of all the duplicated values.
            fn is_duplicated(&self) -> Result<BooleanChunked> {
                ChunkUnique::is_duplicated(&self.0)
            }

            /// Get the bits that represent the null values of the underlying ChunkedArray
            fn null_bits(&self) -> Vec<(usize, Option<Buffer>)> {
                self.0.null_bits()
            }

            /// return a Series in reversed order
            fn reverse(&self) -> Series {
                ChunkReverse::reverse(&self.0).into_series()
            }

            /// Rechunk and return a pointer to the start of the Series.
            /// Only implemented for numeric types
            fn as_single_ptr(&mut self) -> usize {
                unimplemented!()
            }

            /// Shift the values by a given period and fill the parts that will be empty due to this operation
            /// with `Nones`.
            ///
            /// *NOTE: If you want to fill the Nones with a value use the
            /// [`shift` operation on `ChunkedArray<T>`](../chunked_array/ops/trait.ChunkShift.html).*
            ///
            /// # Example
            ///
            /// ```rust
            /// # use polars::prelude::*;
            /// fn example() -> Result<()> {
            ///     let s = Series::new("series", &[1, 2, 3]);
            ///
            ///     let shifted = s.shift(1)?;
            ///     assert_eq!(Vec::from(shifted.i32()?), &[None, Some(1), Some(2)]);
            ///
            ///     let shifted = s.shift(-1)?;
            ///     assert_eq!(Vec::from(shifted.i32()?), &[Some(2), Some(3), None]);
            ///
            ///     let shifted = s.shift(2)?;
            ///     assert_eq!(Vec::from(shifted.i32()?), &[None, None, Some(1)]);
            ///
            ///     Ok(())
            /// }
            /// example();
            /// ```
            fn shift(&self, periods: i32) -> Result<Series> {
                ChunkShift::shift(&self.0, periods).map(|ca| ca.into_series())
            }

            /// Replace None values with one of the following strategies:
            /// * Forward fill (replace None with the previous value)
            /// * Backward fill (replace None with the next value)
            /// * Mean fill (replace None with the mean of the whole array)
            /// * Min fill (replace None with the minimum of the whole array)
            /// * Max fill (replace None with the maximum of the whole array)
            ///
            /// *NOTE: If you want to fill the Nones with a value use the
            /// [`fill_none` operation on `ChunkedArray<T>`](../chunked_array/ops/trait.ChunkFillNone.html)*.
            ///
            /// # Example
            ///
            /// ```rust
            /// # use polars::prelude::*;
            /// fn example() -> Result<()> {
            ///     let s = Series::new("some_missing", &[Some(1), None, Some(2)]);
            ///
            ///     let filled = s.fill_none(FillNoneStrategy::Forward)?;
            ///     assert_eq!(Vec::from(filled.i32()?), &[Some(1), Some(1), Some(2)]);
            ///
            ///     let filled = s.fill_none(FillNoneStrategy::Backward)?;
            ///     assert_eq!(Vec::from(filled.i32()?), &[Some(1), Some(2), Some(2)]);
            ///
            ///     let filled = s.fill_none(FillNoneStrategy::Min)?;
            ///     assert_eq!(Vec::from(filled.i32()?), &[Some(1), Some(1), Some(2)]);
            ///
            ///     let filled = s.fill_none(FillNoneStrategy::Max)?;
            ///     assert_eq!(Vec::from(filled.i32()?), &[Some(1), Some(2), Some(2)]);
            ///
            ///     let filled = s.fill_none(FillNoneStrategy::Mean)?;
            ///     assert_eq!(Vec::from(filled.i32()?), &[Some(1), Some(1), Some(2)]);
            ///
            ///     Ok(())
            /// }
            /// example();
            /// ```
            fn fill_none(&self, strategy: FillNoneStrategy) -> Result<Series> {
                ChunkFillNone::fill_none(&self.0, strategy).map(|ca| ca.into_series())
            }

            /// Create a new ChunkedArray with values from self where the mask evaluates `true` and values
            /// from `other` where the mask evaluates `false`
            fn zip_with(&self, mask: &BooleanChunked, other: &dyn SeriesTrait) -> Result<Series> {
                ChunkZip::zip_with(&self.0, mask, other.as_ref()).map(|ca| ca.into_series())
            }

            fn sum_as_series(&self) -> Series {
                ChunkAggSeries::sum_as_series(&self.0)
            }
            fn max_as_series(&self) -> Series {
                ChunkAggSeries::max_as_series(&self.0)
            }
            fn min_as_series(&self) -> Series {
                ChunkAggSeries::min_as_series(&self.0)
            }
            fn mean_as_series(&self) -> Series {
                ChunkAggSeries::mean_as_series(&self.0)
            }
            fn median_as_series(&self) -> Series {
                ChunkAggSeries::median_as_series(&self.0)
            }
            fn var_as_series(&self) -> Series {
                VarAggSeries::var_as_series(&self.0)
            }
            fn std_as_series(&self) -> Series {
                VarAggSeries::std_as_series(&self.0)
            }
            fn quantile_as_series(&self, quantile: f64) -> Result<Series> {
                ChunkAggSeries::quantile_as_series(&self.0, quantile)
            }
            fn rolling_mean(
                &self,
                window_size: usize,
                weight: Option<&[f64]>,
                ignore_null: bool,
            ) -> Result<Series> {
                ChunkWindow::rolling_mean(&self.0, window_size, weight, ignore_null)
                    .map(|ca| ca.into_series())
            }
            /// Apply a rolling sum to a Series. See:
            /// [ChunkedArray::rolling_mean](crate::prelude::ChunkWindow::rolling_sum).
            fn rolling_sum(
                &self,
                window_size: usize,
                weight: Option<&[f64]>,
                ignore_null: bool,
            ) -> Result<Series> {
                ChunkWindow::rolling_sum(&self.0, window_size, weight, ignore_null)
                    .map(|ca| ca.into_series())
            }
            /// Apply a rolling min to a Series. See:
            /// [ChunkedArray::rolling_mean](crate::prelude::ChunkWindow::rolling_min).
            fn rolling_min(
                &self,
                window_size: usize,
                weight: Option<&[f64]>,
                ignore_null: bool,
            ) -> Result<Series> {
                ChunkWindow::rolling_min(&self.0, window_size, weight, ignore_null)
                    .map(|ca| ca.into_series())
            }
            /// Apply a rolling max to a Series. See:
            /// [ChunkedArray::rolling_mean](crate::prelude::ChunkWindow::rolling_max).
            fn rolling_max(
                &self,
                window_size: usize,
                weight: Option<&[f64]>,
                ignore_null: bool,
            ) -> Result<Series> {
                ChunkWindow::rolling_max(&self.0, window_size, weight, ignore_null)
                    .map(|ca| ca.into_series())
            }

            fn fmt_list(&self) -> String {
                FmtList::fmt_list(&self.0)
            }

            #[cfg(feature = "temporal")]
            #[doc(cfg(feature = "temporal"))]
            /// Extract hour from underlying NaiveDateTime representation.
            /// Returns the hour number from 0 to 23.
            fn hour(&self) -> Result<Series> {
                self.date64().map(|ca| ca.hour().into_series())
            }

            #[cfg(feature = "temporal")]
            #[doc(cfg(feature = "temporal"))]
            /// Extract minute from underlying NaiveDateTime representation.
            /// Returns the minute number from 0 to 59.
            fn minute(&self) -> Result<Series> {
                self.date64().map(|ca| ca.minute().into_series())
            }

            #[cfg(feature = "temporal")]
            #[doc(cfg(feature = "temporal"))]
            /// Extract second from underlying NaiveDateTime representation.
            /// Returns the second number from 0 to 59.
            fn second(&self) -> Result<Series> {
                self.date64().map(|ca| ca.second().into_series())
            }

            #[cfg(feature = "temporal")]
            #[doc(cfg(feature = "temporal"))]
            /// Extract second from underlying NaiveDateTime representation.
            /// Returns the number of nanoseconds since the whole non-leap second.
            /// The range from 1,000,000,000 to 1,999,999,999 represents the leap second.
            fn nanosecond(&self) -> Result<Series> {
                self.date64().map(|ca| ca.nanosecond().into_series())
            }

            #[cfg(feature = "temporal")]
            #[doc(cfg(feature = "temporal"))]
            /// Extract day from underlying NaiveDateTime representation.
            /// Returns the day of month starting from 1.
            ///
            /// The return value ranges from 1 to 31. (The last day of month differs by months.)
            fn day(&self) -> Result<Series> {
                match self.0.dtype() {
                    ArrowDataType::Date32(_) => self.date32().map(|ca| ca.day().into_series()),
                    ArrowDataType::Date64(_) => self.date64().map(|ca| ca.day().into_series()),
                    _ => Err(PolarsError::InvalidOperation(
                        format!("operation not supported on dtype {:?}", self.dtype()).into(),
                    )),
                }
            }

            #[cfg(feature = "temporal")]
            #[doc(cfg(feature = "temporal"))]
            /// Returns the day of year starting from 1.
            ///
            /// The return value ranges from 1 to 366. (The last day of year differs by years.)
            fn ordinal_day(&self) -> Result<Series> {
                match self.0.dtype() {
                    ArrowDataType::Date32(_) => self.date32().map(|ca| ca.ordinal().into_series()),
                    ArrowDataType::Date64(_) => self.date64().map(|ca| ca.ordinal().into_series()),
                    _ => Err(PolarsError::InvalidOperation(
                        format!("operation not supported on dtype {:?}", self.dtype()).into(),
                    )),
                }
            }

            #[cfg(feature = "temporal")]
            #[doc(cfg(feature = "temporal"))]
            /// Extract month from underlying NaiveDateTime representation.
            /// Returns the month number starting from 1.
            ///
            /// The return value ranges from 1 to 12.
            fn month(&self) -> Result<Series> {
                match self.0.dtype() {
                    ArrowDataType::Date32(_) => self.date32().map(|ca| ca.month().into_series()),
                    ArrowDataType::Date64(_) => self.date64().map(|ca| ca.month().into_series()),
                    _ => Err(PolarsError::InvalidOperation(
                        format!("operation not supported on dtype {:?}", self.dtype()).into(),
                    )),
                }
            }

            #[cfg(feature = "temporal")]
            #[doc(cfg(feature = "temporal"))]
            /// Extract month from underlying NaiveDateTime representation.
            /// Returns the year number in the calendar date.
            fn year(&self) -> Result<Series> {
                match self.0.dtype() {
                    ArrowDataType::Date32(_) => self.date32().map(|ca| ca.year().into_series()),
                    ArrowDataType::Date64(_) => self.date64().map(|ca| ca.year().into_series()),
                    _ => Err(PolarsError::InvalidOperation(
                        format!("operation not supported on dtype {:?}", self.dtype()).into(),
                    )),
                }
            }
            fn clone_inner(&self) -> Arc<dyn SeriesTrait> {
                Arc::new(Wrap(Clone::clone(&self.0)))
            }
        }
    };
}

impl_dyn_series!(Float32Chunked);
impl_dyn_series!(Float64Chunked);
impl_dyn_series!(Utf8Chunked);
impl_dyn_series!(ListChunked);
impl_dyn_series!(BooleanChunked);
impl_dyn_series!(UInt8Chunked);
impl_dyn_series!(UInt16Chunked);
impl_dyn_series!(UInt32Chunked);
impl_dyn_series!(UInt64Chunked);
impl_dyn_series!(Int8Chunked);
impl_dyn_series!(Int16Chunked);
impl_dyn_series!(Int32Chunked);
impl_dyn_series!(Int64Chunked);
impl_dyn_series!(DurationNanosecondChunked);
impl_dyn_series!(DurationMillisecondChunked);
impl_dyn_series!(Date32Chunked);
impl_dyn_series!(Date64Chunked);
impl_dyn_series!(Time64NanosecondChunked);
