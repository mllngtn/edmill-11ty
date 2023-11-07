import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from './hooks';

import type { FilterResults } from '../../shared/types/filters';

import { config } from '../../shared/config/config.js';
import { useFetch } from '../../shared/utils/useFetch.js';
import { filtersQuery } from '../../shared/graphql/filters.js';

import { updateFilters } from './store/slices/filtersSlice.js';
import { updateResults } from './store/slices/resultsSlice.js';

import { Loading } from './components/Loading';
import { Filters } from './components/Filters';
import { IntroText } from './components/IntroText';
import { Results } from './components/Results';
import { Pagination } from './components/Pagination';

function App() {

    const dispatch = useAppDispatch();

    const pageInfo = useAppSelector((state) => state.results.pageInfo);

    // when the app first mounts...
    useEffect(() => {

        // ...setup our filters
        function dispatchToUpdateFilters(filters: FilterResults) {
            dispatch(updateFilters(filters));
        }

        useFetch({
            url: config.url,
            query: filtersQuery(),
            callback: dispatchToUpdateFilters,
        });

    }, []);

    const areFiltersLoading = useAppSelector((state) => state.filters.loading);
    const areResultsLoading = useAppSelector((state) => state.results.loading);

    return (
        <section>
            {
                areFiltersLoading
                    ?
                    <Loading />
                    :
                    <div>
                        <Filters />
                        {
                            areResultsLoading
                                ?
                                <Loading />
                                :
                                <div>
                                    <IntroText />
                                    <Results />
                                    {
                                        pageInfo.hasNextPage &&
                                        <Pagination />
                                    }
                                </div>
                        }
                    </div>
            }
        </section>
    )
}

export default App;