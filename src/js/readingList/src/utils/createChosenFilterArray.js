/*
    For a given filter,
        1) scroll through its options
        2) add any options where 'checked === true' to a new array
        3) return the array
*/
export function createChosenFilterArray(filter) {

    const filterArray = [];

    for (let i = 0; i < filter.length; i++) {

        if (filter[i].checked === true) {

            filterArray.push(filter[i].slug);

        }

    }

    return filterArray;

}
