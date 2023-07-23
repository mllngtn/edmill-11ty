/*
    retrieve the reponse to a given query
    from local storage
*/
function retrieve(query) {

    return localStorage.getItem(query);

}

/*
    save the response to a given query 
    to local storage
*/
function save(query, data) {

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

