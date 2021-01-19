initSidebarItems({"enum":[["AnyValue",""],["ArrowDataType","The set of datatypes that are supported by this implementation of Apache Arrow."],["DataType",""],["DateUnit","Date is either a 32-bit or 64-bit type representing elapsed time since UNIX epoch (1970-01-01) in days or milliseconds."],["FillNoneStrategy",""],["InitFold",""],["IntervalUnit","YEAR_MONTH or DAY_TIME interval in SQL style."],["JoinType",""],["PolarsError",""],["TimeUnit","An absolute length of time in seconds, milliseconds, microseconds or nanoseconds."]],"fn":[["naive_date_to_date32",""],["parse_naive_date_from_str",""],["parse_naive_datetime_from_str",""]],"mod":[["builder",""],["datatypes","Data types supported by Polars.At the moment Polars doesn't include all data types available by Arrow. The goal is to incrementally support more data types and prioritize these by usability."]],"struct":[["AlignedVec","A `Vec` wrapper with a memory alignment equal to Arrow's primitive arrays. Can be useful in creating a new ChunkedArray or Arrow Primitive array without copying."],["ArrowField","Contains the meta-data for a single relative type."],["ArrowSchema","Describes the meta-data of an ordered sequence of relative types."],["BooleanChunkedBuilder",""],["BooleanType",""],["CategoricalType",""],["ChunkedArray","ChunkedArrayEvery Series contains a `ChunkedArray<T>`. Unlike Series, ChunkedArray's are typed. This allows us to apply closures to the data and collect the results to a `ChunkedArray` of te same type `T`. Below we use an apply to use the cosine function to the values of a `ChunkedArray`."],["DataFrame",""],["Date32Type",""],["Date64Type",""],["DurationMicrosecondType",""],["DurationMillisecondType",""],["DurationNanosecondType",""],["DurationSecondType",""],["Field",""],["Float32Type",""],["Float64Type",""],["Int16Type",""],["Int32Type",""],["Int64Type",""],["Int8Type",""],["IntervalDayTimeType",""],["IntervalYearMonthType",""],["ListBooleanChunkedBuilder",""],["ListPrimitiveChunkedBuilder",""],["ListType",""],["ListUtf8ChunkedBuilder",""],["NoNull",""],["NumTakeRandomChunked",""],["NumTakeRandomCont",""],["ObjectArray",""],["ObjectType",""],["PrimitiveChunkedBuilder",""],["Schema",""],["Series","SeriesThe columnar data type for a DataFrame. The Series enum consists of typed ChunkedArray's. To quickly cast a `Series` to a `ChunkedArray` you can call the method with the name of the type:"],["Time32MillisecondType",""],["Time32SecondType",""],["Time64MicrosecondType",""],["Time64NanosecondType",""],["TimestampMicrosecondType",""],["TimestampMillisecondType",""],["TimestampNanosecondType",""],["TimestampSecondType",""],["UInt16Type",""],["UInt32Type",""],["UInt64Type",""],["UInt8Type",""],["Utf8ChunkedBuilder",""],["Utf8Type",""]],"trait":[["ArrowNumericType","A subtype of primitive type that represents numeric values."],["ArrowPrimitiveType","Trait indicating a primitive fixed-width type (bool, ints and floats)."],["AsDuration",""],["AsNaiveDate",""],["AsNaiveDateTime",""],["AsNaiveTime",""],["AsTakeIndex",""],["ChunkAgg","Aggregation operations"],["ChunkApply","Fastest way to do elementwise operations on a ChunkedArray"],["ChunkApplyKernel","Apply kernels on the arrow array chunks in a ChunkedArray."],["ChunkBytes",""],["ChunkCast","Cast `ChunkedArray<T>` to `ChunkedArray<N>`"],["ChunkCompare","Compare Series and ChunkedArray's and get a `boolean` mask that can be used to filter rows."],["ChunkCumAgg",""],["ChunkExpandAtIndex","Create a new ChunkedArray filled with values at that index."],["ChunkExplode",""],["ChunkFillNone","Replace None values with various strategies"],["ChunkFillNoneValue","Replace None values with a value"],["ChunkFilter","Filter values by a boolean mask."],["ChunkFull","Fill a ChunkedArray with one value."],["ChunkFullNull",""],["ChunkOps",""],["ChunkReverse","Reverse a ChunkedArray"],["ChunkSet","Create a `ChunkedArray` with new values by index or by boolean mask. Note that these operations clone data. This is however the only way we can modify at mask or index level as the underlying Arrow arrays are immutable."],["ChunkShift",""],["ChunkShiftFill","Shift the values of a ChunkedArray by a number of periods."],["ChunkSort","Sort operations on `ChunkedArray`."],["ChunkTake","Fast access by index."],["ChunkTakeEvery",""],["ChunkUnique","Get unique values in a `ChunkedArray`"],["ChunkVar","Variance and standard deviation aggregation."],["ChunkWindow",""],["ChunkWindowCustom",""],["ChunkZip","Combine 2 ChunkedArrays based on some predicate."],["ChunkedBuilder",""],["CompToSeries",""],["Downcast",""],["FromNaiveDate",""],["FromNaiveDateTime",""],["FromNaiveTime",""],["IntoNoNullIterator","Trait for ChunkedArrays that don't have null values. The result is the most efficient implementation `Iterator`, according to the number of chunks."],["IntoSeries",""],["IntoTakeRandom","Create a type that implements a faster `TakeRandom`."],["LhsNumOps",""],["ListBuilderTrait",""],["NamedFrom",""],["NewChunkedArray",""],["NumComp",""],["NumOpsDispatch",""],["PolarsDataType",""],["PolarsFloatType",""],["PolarsIntegerType",""],["PolarsIterator","A `PolarsIterator` is an iterator over a `ChunkedArray` which contains polars types. A `PolarsIterator` must implement `ExactSizeIterator` and `DoubleEndedIterator`."],["PolarsNumericType",""],["PolarsPrimitiveType",""],["PolarsSingleType","Any type that is not nested"],["Pow",""],["SeriesTrait",""],["TakeRandom","Random access"],["TakeRandomUtf8",""],["ToDummies",""]],"type":[["BooleanChunked",""],["CategoricalChunked",""],["Date32Chunked",""],["Date64Chunked",""],["DurationMillisecondChunked",""],["DurationNanosecondChunked",""],["Float32Chunked",""],["Float64Chunked",""],["Int16Chunked",""],["Int32Chunked",""],["Int64Chunked",""],["Int8Chunked",""],["ListChunked",""],["ObjectChunked",""],["Result",""],["SchemaRef",""],["Time64NanosecondChunked",""],["UInt16Chunked",""],["UInt32Chunked",""],["UInt64Chunked",""],["UInt8Chunked",""],["Utf8Chunked",""]]});