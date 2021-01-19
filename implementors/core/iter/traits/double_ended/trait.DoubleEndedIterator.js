(function() {var implementors = {};
implementors["anyhow"] = [{"text":"impl DoubleEndedIterator for Chain&lt;'_&gt;","synthetic":false,"types":[]}];
implementors["arrayvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; DoubleEndedIterator for IntoIter&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, A:&nbsp;Array&gt; DoubleEndedIterator for Drain&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: 'a,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["arrow"] = [{"text":"impl&lt;'a, T:&nbsp;ArrowPrimitiveType&gt; DoubleEndedIterator for PrimitiveIter&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for BooleanIter&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["bstr"] = [{"text":"impl&lt;'a&gt; DoubleEndedIterator for Bytes&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for DrainBytes&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Graphemes&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for GraphemeIndices&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Chars&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for CharIndices&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["csv"] = [{"text":"impl&lt;'r&gt; DoubleEndedIterator for ByteRecordIter&lt;'r&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'r&gt; DoubleEndedIterator for StringRecordIter&lt;'r&gt;","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; DoubleEndedIterator for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: DoubleEndedIterator,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: DoubleEndedIterator&lt;Item = L::Item&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["flatbuffers"] = [{"text":"impl&lt;'a, T:&nbsp;Follow&lt;'a&gt; + 'a&gt; DoubleEndedIterator for VectorIter&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;K, V&gt; DoubleEndedIterator for Keys&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; DoubleEndedIterator for Values&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; DoubleEndedIterator for ValuesMut&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; DoubleEndedIterator for Iter&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; DoubleEndedIterator for IterMut&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; DoubleEndedIterator for IntoIter&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; DoubleEndedIterator for Drain&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; DoubleEndedIterator for IntoIter&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; DoubleEndedIterator for Iter&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; DoubleEndedIterator for Drain&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; DoubleEndedIterator for Difference&lt;'_, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; DoubleEndedIterator for Intersection&lt;'_, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S1, S2&gt; DoubleEndedIterator for SymmetricDifference&lt;'_, T, S1, S2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: BuildHasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; DoubleEndedIterator for Union&lt;'_, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["itertools"] = [{"text":"impl&lt;I, R&gt; DoubleEndedIterator for MapInto&lt;I, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: DoubleEndedIterator,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::Item: Into&lt;R&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I, F&gt; DoubleEndedIterator for Positions&lt;I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: DoubleEndedIterator + ExactSizeIterator,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(I::Item) -&gt; bool,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I, F&gt; DoubleEndedIterator for Update&lt;I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: DoubleEndedIterator,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(&amp;mut I::Item),&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;X, Iter, G, H&gt; DoubleEndedIterator for ConsTuples&lt;Iter, ((G, H), X)&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: DoubleEndedIterator&lt;Item = ((G, H), X)&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;X, Iter, F, G, H&gt; DoubleEndedIterator for ConsTuples&lt;Iter, ((F, G, H), X)&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: DoubleEndedIterator&lt;Item = ((F, G, H), X)&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;X, Iter, E, F, G, H&gt; DoubleEndedIterator for ConsTuples&lt;Iter, ((E, F, G, H), X)&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: DoubleEndedIterator&lt;Item = ((E, F, G, H), X)&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;X, Iter, D, E, F, G, H&gt; DoubleEndedIterator for ConsTuples&lt;Iter, ((D, E, F, G, H), X)&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: DoubleEndedIterator&lt;Item = ((D, E, F, G, H), X)&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;X, Iter, C, D, E, F, G, H&gt; DoubleEndedIterator for ConsTuples&lt;Iter, ((C, D, E, F, G, H), X)&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: DoubleEndedIterator&lt;Item = ((C, D, E, F, G, H), X)&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;X, Iter, B, C, D, E, F, G, H&gt; DoubleEndedIterator for ConsTuples&lt;Iter, ((B, C, D, E, F, G, H), X)&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: DoubleEndedIterator&lt;Item = ((B, C, D, E, F, G, H), X)&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I, F&gt; DoubleEndedIterator for PadUsing&lt;I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: DoubleEndedIterator + ExactSizeIterator,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnMut(usize) -&gt; I::Item,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;I&gt; DoubleEndedIterator for RcIter&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: DoubleEndedIterator,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A&gt; DoubleEndedIterator for RepeatN&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, U&gt; DoubleEndedIterator for ZipLongest&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: DoubleEndedIterator + ExactSizeIterator,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: DoubleEndedIterator + ExactSizeIterator,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["memchr"] = [{"text":"impl&lt;'a&gt; DoubleEndedIterator for Memchr&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Memchr2&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Memchr3&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["ndarray"] = [{"text":"impl&lt;'a, A&gt; DoubleEndedIterator for Iter&lt;'a, A, Ix1&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, A&gt; DoubleEndedIterator for IterMut&lt;'a, A, Ix1&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, D&gt; DoubleEndedIterator for AxisIter&lt;'a, A, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, D&gt; DoubleEndedIterator for AxisIterMut&lt;'a, A, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, D&gt; DoubleEndedIterator for AxisChunksIter&lt;'a, A, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, D&gt; DoubleEndedIterator for AxisChunksIterMut&lt;'a, A, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, D&gt; DoubleEndedIterator for Axes&lt;'a, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["num_iter"] = [{"text":"impl&lt;A&gt; DoubleEndedIterator for Range&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Integer + Clone + ToPrimitive,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A&gt; DoubleEndedIterator for RangeInclusive&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sub&lt;A, Output = A&gt; + Integer + Clone + ToPrimitive,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["polars_core"] = [{"text":"impl&lt;I&gt; DoubleEndedIterator for SomeIterator&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: DoubleEndedIterator,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; DoubleEndedIterator for NumIterSingleChunk&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PolarsNumericType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; DoubleEndedIterator for NumIterSingleChunkNullCheck&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PolarsNumericType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; DoubleEndedIterator for NumIterManyChunk&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PolarsNumericType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; DoubleEndedIterator for NumIterManyChunkNullCheck&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PolarsNumericType,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Utf8IterSingleChunk&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Utf8IterSingleChunkNullCheck&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Utf8IterManyChunk&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Utf8IterManyChunkNullCheck&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for BooleanIterSingleChunk&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for BooleanIterSingleChunkNullCheck&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for BooleanIterManyChunk&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for BooleanIterManyChunkNullCheck&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for ListIterSingleChunk&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for ListIterSingleChunkNullCheck&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for ListIterManyChunk&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for ListIterManyChunkNullCheck&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["regex"] = [{"text":"impl DoubleEndedIterator for SetMatchesIntoIter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for SetMatchesIter&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl DoubleEndedIterator for SetMatchesIntoIter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for SetMatchesIter&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl&lt;'a&gt; DoubleEndedIterator for Iter&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for IterMut&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl DoubleEndedIterator for IntoIter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Keys&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Values&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for ValuesMut&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;'a, T:&nbsp;'a + Array&gt; DoubleEndedIterator for Drain&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; DoubleEndedIterator for IntoIter&lt;A&gt;","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl&lt;'a, T, P&gt; DoubleEndedIterator for Pairs&lt;'a, T, P&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T, P&gt; DoubleEndedIterator for PairsMut&lt;'a, T, P&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, P&gt; DoubleEndedIterator for IntoPairs&lt;T, P&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; DoubleEndedIterator for IntoIter&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; DoubleEndedIterator for Iter&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; DoubleEndedIterator for IterMut&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["unicode_segmentation"] = [{"text":"impl&lt;'a&gt; DoubleEndedIterator for GraphemeIndices&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for Graphemes&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for UnicodeWords&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for UWordBoundIndices&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; DoubleEndedIterator for UWordBounds&lt;'a&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()