import { useSelector, useDispatch } from 'react-redux';
import { setLoading, updateResults } from '../store/slices/resultsSlice.js';

import { config } from '../config/config.js';

import { booksQuery } from '../graphql/books.js';

import { createTaxonomyArray } from '../utils/createTaxonomyArray.js';
import { useFetch } from '../utils/useFetch.js';

export function Pagination() {

	const dispatch = useDispatch();

	function loadMore(){

		const taxArray = createTaxonomyArray(filtersStore);
	    
	    useFetch({
	        url: config.url,
	        query: booksQuery({
	            'taxArray': taxArray,
	            'first': config.resultsPerPage,
	            'after': resultsStore.pageInfo.endCursor,
	        }),
	        callback: dispatch(appendResults),
	    });

	}

	return (
		<button
		    onClick={loadMore}
		    class="button center"
		>
		    Load more
		</button>
	)
}
