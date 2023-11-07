import { useAppSelector, useAppDispatch } from '../hooks';

import type { BookResults } from '../../../shared/types/results';
import { createTaxonomyArray } from '../../../shared/utils/createTaxonomyArray.js';
import { useFetch } from '../../../shared/utils/useFetch.js';
import { config } from '../../../shared/config/config.js';
import { booksQuery } from '../../../shared/graphql/books.js';

import { setLoading, appendResults } from '../store/slices/resultsSlice.js';

export function Pagination() {

	const dispatch = useAppDispatch();

	const filters = useAppSelector((state) => state.filters);
	const pageInfo = useAppSelector((state) => state.results.pageInfo);

	function loadMore() {

		const taxArray = createTaxonomyArray(
			filters.bookFormats,
			filters.bookTypes,
			filters.bookYears,
		);

		function dispatchToAppendResults(results: BookResults) {
			dispatch(appendResults(results));
		}

		useFetch({
			url: config.url,
			query: booksQuery({
				'taxArray': taxArray,
				'first': config.resultsPerPage.toString(),
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
