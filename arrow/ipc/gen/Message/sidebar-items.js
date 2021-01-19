initSidebarItems({"constant":[["ENUM_MAX_BODY_COMPRESSION_METHOD",""],["ENUM_MAX_COMPRESSION_TYPE",""],["ENUM_MAX_MESSAGE_HEADER",""],["ENUM_MIN_BODY_COMPRESSION_METHOD",""],["ENUM_MIN_COMPRESSION_TYPE",""],["ENUM_MIN_MESSAGE_HEADER",""],["ENUM_VALUES_BODY_COMPRESSION_METHOD",""],["ENUM_VALUES_COMPRESSION_TYPE",""],["ENUM_VALUES_MESSAGE_HEADER",""]],"enum":[["BodyCompressionOffset",""],["DictionaryBatchOffset",""],["MessageOffset",""],["RecordBatchOffset",""]],"fn":[["finish_message_buffer",""],["finish_size_prefixed_message_buffer",""],["get_root_as_message",""],["get_size_prefixed_root_as_message",""],["root_as_message","Verifies that a buffer of bytes contains a `Message` and returns it. Note that verification is still experimental and may not catch every error, or be maximally performant. For the previous, unchecked, behavior use `root_as_message_unchecked`."],["root_as_message_unchecked","Assumes, without verification, that a buffer of bytes contains a Message and returns it."],["root_as_message_with_opts","Verifies, with the given options, that a buffer of bytes contains a `Message` and returns it. Note that verification is still experimental and may not catch every error, or be maximally performant. For the previous, unchecked, behavior use `root_as_message_unchecked`."],["size_prefixed_root_as_message","Verifies that a buffer of bytes contains a size prefixed `Message` and returns it. Note that verification is still experimental and may not catch every error, or be maximally performant. For the previous, unchecked, behavior use `size_prefixed_root_as_message_unchecked`."],["size_prefixed_root_as_message_unchecked","Assumes, without verification, that a buffer of bytes contains a size prefixed Message and returns it."],["size_prefixed_root_as_message_with_opts","Verifies, with the given verifier options, that a buffer of bytes contains a size prefixed `Message` and returns it. Note that verification is still experimental and may not catch every error, or be maximally performant. For the previous, unchecked, behavior use `root_as_message_unchecked`."]],"struct":[["BodyCompression","Optional compression for the memory buffers constituting IPC message bodies. Intended for use with RecordBatch but could be used for other message types"],["BodyCompressionArgs",""],["BodyCompressionBuilder",""],["BodyCompressionMethod","Provided for forward compatibility in case we need to support different strategies for compressing the IPC message body (like whole-body compression rather than buffer-level) in the future"],["CompressionType",""],["DictionaryBatch","For sending dictionary encoding information. Any Field can be dictionary-encoded, but in this case none of its children may be dictionary-encoded. There is one vector / column per dictionary, but that vector / column may be spread across multiple dictionary batches by using the isDelta flag"],["DictionaryBatchArgs",""],["DictionaryBatchBuilder",""],["FieldNode","Data structures for describing a table row batch (a collection of equal-length Arrow arrays) Metadata about a field at some level of a nested type tree (but not its children)."],["Message",""],["MessageArgs",""],["MessageBuilder",""],["MessageHeader","The root Message type This union enables us to easily send different message types without redundant storage, and in the future we can easily add new message types."],["MessageHeaderUnionTableOffset",""],["RecordBatch","A data header describing the shared memory layout of a \"record\" or \"row\" batch. Some systems call this a \"row batch\" internally and others a \"record batch\"."],["RecordBatchArgs",""],["RecordBatchBuilder",""]]});