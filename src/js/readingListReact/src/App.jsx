import { useSelector, useDispatch } from 'react-redux';

import { updateResults } from './store/slices/resultsSlice.js';

import { Loading } from './components/Loading';
import { Results } from './components/Results';

import { config } from './config/config.js';

import { useFetch } from './utils/useFetch.js';

import { booksQuery } from './graphql/books.js';

function App() {

    const dispatch = useDispatch();

    function dispatchResults(results) {
        console.log('results!');
        console.log(results);
        dispatch(updateResults(results));
    }

    // 2: grab initial results
    useFetch({
        url: config.url,
        query: booksQuery({
            'taxArray': `[]`,
            'first': config.resultsPerPage,
            'after': 0,
        }),
        callback: dispatchResults,
    });
    
    const isLoading = useSelector((state) => state.results.loading);

    return (
        <section>
            { isLoading ? <Loading /> : <Results /> }
        </section>
    )
}

export default App;