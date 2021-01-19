initSidebarItems({"enum":[["AAggExpr",""],["AExpr",""],["ALogicalPlan",""],["AggExpr",""],["AnyValue",""],["ArrowDataType","The set of datatypes that are supported by this implementation of Apache Arrow."],["CsvEncoding",""],["DataType",""],["DateUnit","Date is either a 32-bit or 64-bit type representing elapsed time since UNIX epoch (1970-01-01) in days or milliseconds."],["Expr","Queries consists of multiple expressions."],["FillNoneStrategy",""],["InitFold",""],["IntervalUnit","YEAR_MONTH or DAY_TIME interval in SQL style."],["JoinType",""],["LogicalPlan",""],["Operator",""],["PolarsError",""],["ScalarValue",""],["TimeUnit","An absolute length of time in seconds, milliseconds, microseconds or nanoseconds."]],"fn":[["all_exprs","Evaluate all the expressions with a bitwise and"],["any_exprs","Evaluate all the expressions with a bitwise or"],["avg","Find the mean of all the values in this Expression."],["binary_expr",""],["cast","Cast expression."],["col","Create a Column Expression based on a column name."],["count","Count the number of values in this Expression."],["fold_exprs","Accumulate over multiple columns horizontally / row wise."],["is_not_null","IsNotNull expression."],["is_null","IsNull expression"],["lit","Create a Literal Expression from `L`"],["map_binary","Apply a closure on the two columns that are evaluated from `Expr` a and `Expr` b."],["map_binary_lazy_field","Binary function where the output type is determined at runtime when the schema is known."],["max","Find the maximum of all the values in this Expression."],["max_exprs","Get the the minimum value per row"],["mean","Find the mean of all the values in this Expression."],["median","Find the median of all the values in this Expression."],["min","Find the minimum of all the values in this Expression."],["min_exprs","Get the the minimum value per row"],["naive_date_to_date32",""],["not","Not expression."],["parse_naive_date_from_str",""],["parse_naive_datetime_from_str",""],["quantile","Find a specific quantile of all the values in this Expression."],["sum","Sum all the values in this Expression."],["sum_exprs","Get the the sum of the values per row"],["ternary_expr",""],["when","Start a when-then-otherwise expression"]],"mod":[["datatypes","Data types supported by Polars.At the moment Polars doesn't include all data types available by Arrow. The goal is to incrementally support more data types and prioritize these by usability."]],"struct":[["ALogicalPlanBuilder",""],["AggQuantileExpr",""],["AliasExpr",""],["AlignedVec","A `Vec` wrapper with a memory alignment equal to Arrow's primitive arrays. Can be useful in creating a new ChunkedArray or Arrow Primitive array without copying."],["ApplyExpr",""],["Arc","A thread-safe reference-counting pointer. 'Arc' stands for 'Atomically Reference Counted'."],["Arena",""],["ArrowField","Contains the meta-data for a single relative type."],["ArrowSchema","Describes the meta-data of an ordered sequence of relative types."],["BinaryExpr",""],["BooleanChunkedBuilder",""],["BooleanType",""],["CastExpr",""],["CategoricalType",""],["ChunkedArray","ChunkedArrayEvery Series contains a `ChunkedArray<T>`. Unlike Series, ChunkedArray's are typed. This allows us to apply closures to the data and collect the results to a `ChunkedArray` of te same type `T`. Below we use an apply to use the cosine function to the values of a `ChunkedArray`."],["ColumnExpr",""],["CsvExec",""],["CsvReader","Create a new DataFrame by reading a csv file."],["CsvWriter","Write a DataFrame to csv."],["DataFrame",""],["DataFrameExec",""],["Date32Type",""],["Date64Type",""],["DefaultPlanner",""],["DurationMicrosecondType",""],["DurationMillisecondType",""],["DurationNanosecondType",""],["DurationSecondType",""],["Field",""],["FilterExec",""],["Float32Type",""],["Float64Type",""],["GroupByExec","Take an input Executor and a multiple expressions"],["IPCReader","Read Arrows IPC format into a DataFrame"],["IPCWriter","Write a DataFrame to Arrow's IPC format"],["Int16Type",""],["Int32Type",""],["Int64Type",""],["Int8Type",""],["IntervalDayTimeType",""],["IntervalYearMonthType",""],["IsNotNullExpr",""],["IsNullExpr",""],["JoinOptions",""],["JsonReader",""],["LazyCsvReader",""],["LazyFrame","Lazy abstraction over an eager `DataFrame`. It really is an abstraction over a logical plan. The methods of this struct will incrementally modify a logical plan until output is requested (via collect)"],["LazyGroupBy","Utility struct for lazy groupby operation."],["ListBooleanChunkedBuilder",""],["ListPrimitiveChunkedBuilder",""],["ListType",""],["ListUtf8ChunkedBuilder",""],["LiteralExpr",""],["LogicalPlanBuilder",""],["NoNull",""],["Node",""],["NotExpr",""],["NumTakeRandomChunked",""],["NumTakeRandomCont",""],["ObjectType",""],["OptState","State of the allowed optimizations"],["ParquetReader","Read Apache parquet format into a DataFrame."],["PredicatePushDown",""],["PrimitiveChunkedBuilder",""],["ProjectionPushDown",""],["ReaderBuilder","JSON file reader builder"],["Schema",""],["Series","SeriesThe columnar data type for a DataFrame. The Series enum consists of typed ChunkedArray's. To quickly cast a `Series` to a `ChunkedArray` you can call the method with the name of the type:"],["SliceExpr",""],["SliceableCursor","This is object to use if your file is already in memory. The sliceable cursor is similar to std::io::Cursor, except that it makes it easy to create \"cursor slices\". To achieve this, it uses Arc instead of shared references. Indeed reference fields are painfull because the lack of Generic Associated Type implies that you would require complex lifetime propagation when returning such a cursor."],["SortExpr",""],["StackOptimizer","Optimizer that uses a stack and memory arenas in favor of recursion"],["StandardExec","Take an input Executor (creates the input DataFrame) and a multiple PhysicalExpressions (create the output Series)"],["TernaryExpr",""],["Time32MillisecondType",""],["Time32SecondType",""],["Time64MicrosecondType",""],["Time64NanosecondType",""],["TimestampMicrosecondType",""],["TimestampMillisecondType",""],["TimestampNanosecondType",""],["TimestampSecondType",""],["TypeCoercionRule",""],["UInt16Type",""],["UInt32Type",""],["UInt64Type",""],["UInt8Type",""],["Utf8ChunkedBuilder",""],["Utf8Type",""],["When",""],["WhenThen",""],["WindowExpr",""],["WriterBuilder","A CSV writer builder"]],"trait":[["ArrowNumericType","A subtype of primitive type that represents numeric values."],["ArrowPrimitiveType","Trait indicating a primitive fixed-width type (bool, ints and floats)."],["AsDuration",""],["AsNaiveDate",""],["AsNaiveDateTime",""],["AsNaiveTime",""],["AsTakeIndex",""],["BinaryUdfOutputField",""],["ChunkAgg","Aggregation operations"],["ChunkApply","Fastest way to do elementwise operations on a ChunkedArray"],["ChunkApplyKernel","Apply kernels on the arrow array chunks in a ChunkedArray."],["ChunkBytes",""],["ChunkCast","Cast `ChunkedArray<T>` to `ChunkedArray<N>`"],["ChunkCompare","Compare Series and ChunkedArray's and get a `boolean` mask that can be used to filter rows."],["ChunkCumAgg",""],["ChunkExpandAtIndex","Create a new ChunkedArray filled with values at that index."],["ChunkExplode",""],["ChunkFillNone","Replace None values with various strategies"],["ChunkFillNoneValue","Replace None values with a value"],["ChunkFilter","Filter values by a boolean mask."],["ChunkFull","Fill a ChunkedArray with one value."],["ChunkFullNull",""],["ChunkOps",""],["ChunkReverse","Reverse a ChunkedArray"],["ChunkSet","Create a `ChunkedArray` with new values by index or by boolean mask. Note that these operations clone data. This is however the only way we can modify at mask or index level as the underlying Arrow arrays are immutable."],["ChunkShift",""],["ChunkShiftFill","Shift the values of a ChunkedArray by a number of periods."],["ChunkSort","Sort operations on `ChunkedArray`."],["ChunkTake","Fast access by index."],["ChunkTakeEvery",""],["ChunkUnique","Get unique values in a `ChunkedArray`"],["ChunkVar","Variance and standard deviation aggregation."],["ChunkWindow",""],["ChunkWindowCustom",""],["ChunkZip","Combine 2 ChunkedArrays based on some predicate."],["ChunkedBuilder",""],["CompToSeries",""],["DataFrameUdf",""],["Downcast",""],["Executor","Executors will evaluate physical expressions and collect them in a DataFrame."],["FromNaiveDate",""],["FromNaiveDateTime",""],["FromNaiveTime",""],["IntoLazy",""],["IntoNoNullIterator","Trait for ChunkedArrays that don't have null values. The result is the most efficient implementation `Iterator`, according to the number of chunks."],["IntoSeries",""],["IntoTakeRandom","Create a type that implements a faster `TakeRandom`."],["LhsNumOps",""],["ListBuilderTrait",""],["Literal",""],["NamedFrom",""],["NewChunkedArray",""],["NumComp",""],["NumOpsDispatch",""],["OptimizationRule",""],["Optimize",""],["PhysicalExpr","Take a DataFrame and evaluate the expressions. Implement this for Column, lt, eq, etc"],["PhysicalPlanner",""],["PolarsDataType",""],["PolarsFloatType",""],["PolarsIntegerType",""],["PolarsIterator","A `PolarsIterator` is an iterator over a `ChunkedArray` which contains polars types. A `PolarsIterator` must implement `ExactSizeIterator` and `DoubleEndedIterator`."],["PolarsNumericType",""],["PolarsPrimitiveType",""],["PolarsSingleType","Any type that is not nested"],["Pow",""],["SerReader",""],["SerWriter",""],["SeriesBinaryUdf",""],["SeriesTrait",""],["SeriesUdf",""],["TakeRandom","Random access"],["TakeRandomUtf8",""],["ToDummies",""]],"type":[["AllowedOptimizations","AllowedOptimizations"],["BooleanChunked",""],["CategoricalChunked",""],["Date32Chunked",""],["Date64Chunked",""],["DurationMillisecondChunked",""],["DurationNanosecondChunked",""],["Float32Chunked",""],["Float64Chunked",""],["Int16Chunked",""],["Int32Chunked",""],["Int64Chunked",""],["Int8Chunked",""],["ListChunked",""],["ObjectChunked",""],["Result",""],["SchemaRef",""],["Time64NanosecondChunked",""],["UInt16Chunked",""],["UInt32Chunked",""],["UInt64Chunked",""],["UInt8Chunked",""],["Utf8Chunked",""]]});