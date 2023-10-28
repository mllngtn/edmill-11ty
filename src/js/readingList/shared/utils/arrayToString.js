/*
    helper function which takes an array, and
    returns its contents as a string surrounded by square braces
*/
export function arrayToString(array) {

    let stringArray = '';

    for (let i = 0; i < array.length; i++) {

        stringArray += '"' + array[i] + '"';

    }

    return '[' + stringArray + ']';

}
