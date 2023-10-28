import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { config } from '../../../shared/config/config.js';
import { booksQuery } from '../../../shared/graphql/books.js';
import { createTaxonomyArray } from '../../../shared/utils/createTaxonomyArray.js';
import { useFetch } from '../../../shared/utils/useFetch.js';

import { updateResults } from '../store/slices/resultsSlice.js';

import { Filter } from './Filter';

export function Filters() {

    const dispatch = useDispatch();

    const filters = useSelector((state) => state.filters);

    // every time the filters change...
    useEffect(() => {

        const taxArray = createTaxonomyArray(filters);
        
        // ...grab the results
        function dispatchToUpdateResults(results) {
            dispatch(updateResults(results));
        }

        useFetch({
            url: config.url,
            query: booksQuery({
                'taxArray': taxArray,
                'first': config.resultsPerPage,
                'after': 0,
            }),
            callback: dispatchToUpdateResults,
        });

    }, [filters]);

    return (
        <div>
            <h2 className="h5 top-margin">
                Filter by:
            </h2>

            <Filter id="bookFormats" name="Format" filter={filters.bookFormats}/>
            <Filter id="bookTypes" name="Genre" filter={filters.bookTypes}/>
            <Filter id="bookYears" name="Year" filter={filters.bookYears}/>
        </div>
    )
};
    