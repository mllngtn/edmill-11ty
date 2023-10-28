import { useSelector, useDispatch } from 'react-redux';

import { createTaxonomyArray } from '../../../shared/utils/createTaxonomyArray.js';
import { useFetch } from '../../../shared/utils/useFetch.js';
import { config } from '../../../shared/config/config.js';
import { booksQuery } from '../../../shared/graphql/books.js';

import { setLoading, appendResults } from '../store/slices/resultsSlice.js';

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
	        useCache: false,
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
