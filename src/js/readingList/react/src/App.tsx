import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

    const dispatch = useDispatch();

    const pageInfo = useSelector((state) => state.results.pageInfo);

    // when the app first mounts...
    useEffect(() => {

        // ...setup our filters
        function dispatchToUpdateFilters(filters) {
            dispatch(updateFilters(filters));
        }

        useFetch({
            url: config.url,
            query: filtersQuery(),
            callback: dispatchToUpdateFilters,
        });

    }, []);
    
    const areFiltersLoading = useSelector((state) => state.filters.loading);
    const areResultsLoading = useSelector((state) => state.results.loading);

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