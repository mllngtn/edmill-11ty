/*
    retrieve a given query's response from local storage
*/
function retrieve(query: string) {

    return localStorage.getItem(query) || '{}';

}

/*
    save a given query's response to local storage
*/
function save(query: string, data: string) {

    try {

        localStorage.setItem(query, data);

    } catch (err) {

        console.log(err);

    }

}

export const cache = {
    retrieve,
    save,
};
