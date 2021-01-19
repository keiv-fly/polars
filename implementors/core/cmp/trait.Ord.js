(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;A&gt; Ord for ArrayString&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Array&lt;Item = u8&gt; + Copy,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Ord&gt; Ord for CapacityError&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Ord for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["arrow"] = [{"text":"impl Ord for DataType","synthetic":false,"types":[]},{"text":"impl Ord for DateUnit","synthetic":false,"types":[]},{"text":"impl Ord for TimeUnit","synthetic":false,"types":[]},{"text":"impl Ord for IntervalUnit","synthetic":false,"types":[]},{"text":"impl Ord for Field","synthetic":false,"types":[]},{"text":"impl Ord for CompressionType","synthetic":false,"types":[]},{"text":"impl Ord for BodyCompressionMethod","synthetic":false,"types":[]},{"text":"impl Ord for MessageHeader","synthetic":false,"types":[]},{"text":"impl Ord for MetadataVersion","synthetic":false,"types":[]},{"text":"impl Ord for Feature","synthetic":false,"types":[]},{"text":"impl Ord for UnionMode","synthetic":false,"types":[]},{"text":"impl Ord for Precision","synthetic":false,"types":[]},{"text":"impl Ord for DateUnit","synthetic":false,"types":[]},{"text":"impl Ord for TimeUnit","synthetic":false,"types":[]},{"text":"impl Ord for IntervalUnit","synthetic":false,"types":[]},{"text":"impl Ord for Type","synthetic":false,"types":[]},{"text":"impl Ord for DictionaryKind","synthetic":false,"types":[]},{"text":"impl Ord for Endianness","synthetic":false,"types":[]},{"text":"impl Ord for SparseMatrixCompressedAxis","synthetic":false,"types":[]},{"text":"impl Ord for SparseTensorIndex","synthetic":false,"types":[]}];
implementors["bstr"] = [{"text":"impl Ord for BString","synthetic":false,"types":[]},{"text":"impl Ord for BStr","synthetic":false,"types":[]}];
implementors["byteorder"] = [{"text":"impl Ord for BigEndian","synthetic":false,"types":[]},{"text":"impl Ord for LittleEndian","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl Ord for NaiveDate","synthetic":false,"types":[]},{"text":"impl Ord for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Ord for IsoWeek","synthetic":false,"types":[]},{"text":"impl Ord for NaiveTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Ord for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Ord for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?Sized + Pointable&gt; Ord for Shared&lt;'_, T&gt;","synthetic":false,"types":[]}];
implementors["crossterm"] = [{"text":"impl Ord for KeyModifiers","synthetic":false,"types":[]},{"text":"impl Ord for Attribute","synthetic":false,"types":[]},{"text":"impl Ord for Color","synthetic":false,"types":[]},{"text":"impl Ord for Colored","synthetic":false,"types":[]},{"text":"impl Ord for ClearType","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L:&nbsp;Ord, R:&nbsp;Ord&gt; Ord for Either&lt;L, R&gt;","synthetic":false,"types":[]}];
implementors["lexical_core"] = [{"text":"impl Ord for ErrorCode","synthetic":false,"types":[]},{"text":"impl Ord for Error","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Ord for Interest","synthetic":false,"types":[]},{"text":"impl Ord for Token","synthetic":false,"types":[]}];
implementors["ndarray"] = [{"text":"impl Ord for Axis","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl Ord for Sign","synthetic":false,"types":[]},{"text":"impl Ord for BigInt","synthetic":false,"types":[]},{"text":"impl Ord for BigUint","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; Ord for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["ordered_float"] = [{"text":"impl&lt;T:&nbsp;Float&gt; Ord for OrderedFloat&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Float&gt; Ord for NotNan&lt;T&gt;","synthetic":false,"types":[]}];
implementors["packed_simd_2"] = [{"text":"impl Ord for m8","synthetic":false,"types":[]},{"text":"impl Ord for m16","synthetic":false,"types":[]},{"text":"impl Ord for m32","synthetic":false,"types":[]},{"text":"impl Ord for m64","synthetic":false,"types":[]},{"text":"impl Ord for m128","synthetic":false,"types":[]},{"text":"impl Ord for msize","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i8x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u8x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m8x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i8x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u8x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m8x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i16x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u16x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m16x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i8x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u8x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m8x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i16x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u16x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m16x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i32x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u32x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m32x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i8x16&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u8x16&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m8x16&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i16x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u16x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m16x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i32x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u32x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m32x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i64x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u64x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m64x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i128x1&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u128x1&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m128x1&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i8x32&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u8x32&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m8x32&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i16x16&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u16x16&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m16x16&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i32x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u32x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m32x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i64x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u64x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m64x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i128x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u128x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m128x2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i8x64&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u8x64&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m8x64&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i16x32&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u16x32&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m16x32&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i32x16&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u32x16&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m32x16&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i64x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u64x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m64x8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;i128x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;u128x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;m128x4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;isizex2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;usizex2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;msizex2&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;isizex4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;usizex4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;msizex4&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;isizex8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;usizex8&gt;","synthetic":false,"types":[]},{"text":"impl Ord for LexicographicallyOrdered&lt;msizex8&gt;","synthetic":false,"types":[]}];
implementors["parquet_format"] = [{"text":"impl Ord for Type","synthetic":false,"types":[]},{"text":"impl Ord for ConvertedType","synthetic":false,"types":[]},{"text":"impl Ord for FieldRepetitionType","synthetic":false,"types":[]},{"text":"impl Ord for Encoding","synthetic":false,"types":[]},{"text":"impl Ord for CompressionCodec","synthetic":false,"types":[]},{"text":"impl Ord for PageType","synthetic":false,"types":[]},{"text":"impl Ord for BoundaryOrder","synthetic":false,"types":[]},{"text":"impl Ord for Statistics","synthetic":false,"types":[]},{"text":"impl Ord for StringType","synthetic":false,"types":[]},{"text":"impl Ord for UUIDType","synthetic":false,"types":[]},{"text":"impl Ord for MapType","synthetic":false,"types":[]},{"text":"impl Ord for ListType","synthetic":false,"types":[]},{"text":"impl Ord for EnumType","synthetic":false,"types":[]},{"text":"impl Ord for DateType","synthetic":false,"types":[]},{"text":"impl Ord for NullType","synthetic":false,"types":[]},{"text":"impl Ord for DecimalType","synthetic":false,"types":[]},{"text":"impl Ord for MilliSeconds","synthetic":false,"types":[]},{"text":"impl Ord for MicroSeconds","synthetic":false,"types":[]},{"text":"impl Ord for NanoSeconds","synthetic":false,"types":[]},{"text":"impl Ord for TimeUnit","synthetic":false,"types":[]},{"text":"impl Ord for TimestampType","synthetic":false,"types":[]},{"text":"impl Ord for TimeType","synthetic":false,"types":[]},{"text":"impl Ord for IntType","synthetic":false,"types":[]},{"text":"impl Ord for JsonType","synthetic":false,"types":[]},{"text":"impl Ord for BsonType","synthetic":false,"types":[]},{"text":"impl Ord for LogicalType","synthetic":false,"types":[]},{"text":"impl Ord for SchemaElement","synthetic":false,"types":[]},{"text":"impl Ord for DataPageHeader","synthetic":false,"types":[]},{"text":"impl Ord for IndexPageHeader","synthetic":false,"types":[]},{"text":"impl Ord for DictionaryPageHeader","synthetic":false,"types":[]},{"text":"impl Ord for DataPageHeaderV2","synthetic":false,"types":[]},{"text":"impl Ord for PageHeader","synthetic":false,"types":[]},{"text":"impl Ord for KeyValue","synthetic":false,"types":[]},{"text":"impl Ord for SortingColumn","synthetic":false,"types":[]},{"text":"impl Ord for PageEncodingStats","synthetic":false,"types":[]},{"text":"impl Ord for ColumnMetaData","synthetic":false,"types":[]},{"text":"impl Ord for ColumnChunk","synthetic":false,"types":[]},{"text":"impl Ord for RowGroup","synthetic":false,"types":[]},{"text":"impl Ord for TypeDefinedOrder","synthetic":false,"types":[]},{"text":"impl Ord for ColumnOrder","synthetic":false,"types":[]},{"text":"impl Ord for PageLocation","synthetic":false,"types":[]},{"text":"impl Ord for OffsetIndex","synthetic":false,"types":[]},{"text":"impl Ord for ColumnIndex","synthetic":false,"types":[]},{"text":"impl Ord for FileMetaData","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Ord for Ident","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl Ord for Span","synthetic":false,"types":[]},{"text":"impl Ord for Position","synthetic":false,"types":[]},{"text":"impl Ord for Literal","synthetic":false,"types":[]},{"text":"impl Ord for ClassUnicodeRange","synthetic":false,"types":[]},{"text":"impl Ord for ClassBytesRange","synthetic":false,"types":[]},{"text":"impl Ord for Utf8Sequence","synthetic":false,"types":[]},{"text":"impl Ord for Utf8Range","synthetic":false,"types":[]}];
implementors["signal_hook_registry"] = [{"text":"impl Ord for SigId","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Ord for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Ord for Lifetime","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Ord for Duration","synthetic":false,"types":[]},{"text":"impl Ord for Timespec","synthetic":false,"types":[]},{"text":"impl Ord for SteadyTime","synthetic":false,"types":[]},{"text":"impl Ord for Tm","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()