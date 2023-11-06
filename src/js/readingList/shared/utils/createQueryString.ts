import { arrayToString } from './arrayToString.js';

/*
    Function which takes:
        1) an identifier string (wordpress' taxonomy name),
        2) an array of selected filter options
    and turns them into a string to be injected into our graphql query
*/
export function createQueryString(identifier, filterArray) {

    return `{
        taxonomy: ` + identifier + `,
        operator: IN,
        field: SLUG,
        terms: ` + arrayToString(filterArray) + `
    }`;

}
