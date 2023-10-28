import { useSelector, useDispatch } from 'react-redux';
import { setLoading, appendResults } from '../store/slices/resultsSlice.js';

import { config } from '../config/config.js';

import { booksQuery } from '../graphql/books.js';

import { createTaxonomyArray } from '../utils/createTaxonomyArray.js';
import { useFetch } from '../utils/useFetch.js';

export function Pagination() {

	const dispatch = useDispatch();

	const filters = useSelector((state) => state.filters);
    const pageInfo = useSelector((state) => state.results.pageInfo);

	function loadMore(){

		const taxArray = createTaxonomyArray(filters);

        function dispatchToAppendResults(results) {
            dispatch(appendResults(results));
        }
	    
	    useFetch({
	        url: config.url,
	        query: booksQuery({
	            'taxArray': taxArray,
	            'first': config.resultsPerPage,
	            'after': pageInfo.endCursor,
	        }),
	        callback: dispatchToAppendResults,
	    });

	}

	return (
		<button
		    onClick={loadMore}
		    className="button center"
		>
		    Load more
		</button>
	)
}
