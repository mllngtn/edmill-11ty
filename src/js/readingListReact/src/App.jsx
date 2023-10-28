import { useSelector, useDispatch } from 'react-redux';

import { updateFilters } from './store/slices/filtersSlice.js';
import { updateResults } from './store/slices/resultsSlice.js';

import { Loading } from './components/Loading';
import { Filters } from './components/Filters';
import { Results } from './components/Results';
import { Pagination } from './components/Pagination';

import { config } from './config/config.js';

import { useFetch } from './utils/useFetch.js';

import { booksQuery } from './graphql/books.js';
import { filtersQuery } from './graphql/filters.js';

function App() {

    const dispatch = useDispatch();

    // 1: setup filters
    function dispatchToUpdateFilters(filters) {
        dispatch(updateFilters(filters));
    }

    useFetch({
        url: config.url,
        query: filtersQuery(),
        callback: dispatchToUpdateFilters,
    });

    // 2: grab initial results
    function dispatchToUpdateResults(results) {
        dispatch(updateResults(results));
    }

    useFetch({
        url: config.url,
        query: booksQuery({
            'taxArray': `[]`,
            'first': config.resultsPerPage,
            'after': 0,
        }),
        callback: dispatchToUpdateResults,
    });
    
    const isLoading = useSelector((state) => state.results.loading);

    return (
        <section>
            { 
                isLoading 
                ? 
                    <Loading /> 
                : 
                    <div>
                        <Filters />
                        <Results />
                        <Pagination />
                    </div>
            }
        </section>
    )
}

export default App;