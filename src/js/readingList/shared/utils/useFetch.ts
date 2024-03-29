import { cache } from './cache';

/*
    useFetch will fire its callback function twice:
        1) first, with cached data,
        2) then with new data;
*/
export function useFetch({
    url = '',
    query = '',
    callback = function doCallback(data: any) {

        console.log('error: useFetch requires a callback function');

    },
    useCache = true,
}) {

    /*
        first, check if we have a cached response to this query.
        if so, pass that response to our callback function
    */
    const cached = JSON.parse(cache.retrieve(query));

    if (cached.data && useCache) {

        callback(cached);

    }

    /*
        then, do a fetch request to grab the latest response.
        pass the latest response to our callback function,
        and cache the latest response.
    */
    async function doFetch() {

        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: query,
        });

        const data = await response.json();

        // if the new data is the same as the old, then do nothing
        if (JSON.stringify(data) === JSON.stringify(cached) && useCache) {

            return;

        }

        callback(data);

        cache.save(query, JSON.stringify(data));

    }

    doFetch();

}
