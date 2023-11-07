import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';

import type { BookResults } from '../../../shared/types/results';

import { config } from '../../../shared/config/config.js';
import { booksQuery } from '../../../shared/graphql/books.js';
import { createTaxonomyArray } from '../../../shared/utils/createTaxonomyArray.js';
import { useFetch } from '../../../shared/utils/useFetch.js';

import { updateResults, setLoading } from '../store/slices/resultsSlice.js';

import { Filter } from './Filter';

export function Filters() {

    const dispatch = useAppDispatch();

    const filters = useAppSelector((state) => state.filters);

    // every time the filters change...
    useEffect(() => {

        dispatch(setLoading(true));

        const taxArray = createTaxonomyArray(
            filters.bookFormats,
            filters.bookTypes,
            filters.bookYears,
        );

        // ...grab the results
        function dispatchToUpdateResults(results: BookResults) {

            dispatch(updateResults(results));

            dispatch(setLoading(false));
        }

        useFetch({
            url: config.url,
            query: booksQuery({
                'taxArray': taxArray,
                'first': config.resultsPerPage.toString(),
                'after': '0',
            }),
            callback: dispatchToUpdateResults,
        });

    }, [filters]);

    return (
        <div>
            <h2 className="h5 top-margin">
                Filter by:
            </h2>

            <Filter id="bookFormats" name="Format" filter={filters.bookFormats} />
            <Filter id="bookTypes" name="Genre" filter={filters.bookTypes} />
            <Filter id="bookYears" name="Year" filter={filters.bookYears} />
        </div>
    )
};
