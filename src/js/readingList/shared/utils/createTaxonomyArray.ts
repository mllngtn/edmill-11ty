import { createChosenFilterArray } from './createChosenFilterArray.js';
import { createQueryString } from './createQueryString.js';

/*
    This function creates a 'taxArray' string which looks a bit like this:

    `[
        {
            taxonomy: BOOKFORMAT,
            operator: IN,
            field: SLUG,
            terms: ["Slug 1", "Slug 2"]
        },
        {
            ...etc.
        }

    ]`

    This string will get injected into our graphql call
*/
export function createTaxonomyArray(filtersStore) {

    const chosenFormats = createChosenFilterArray(filtersStore.bookFormats);
    const chosenTypes = createChosenFilterArray(filtersStore.bookTypes);
    const chosenYears = createChosenFilterArray(filtersStore.bookYears);

    let taxArray = '[';

    if (chosenFormats.length) {

        taxArray += createQueryString('BOOKFORMAT', chosenFormats);

    }

    if (chosenTypes.length) {

        taxArray += createQueryString('BOOKTYPE', chosenTypes);

    }

    if (chosenYears.length) {

        taxArray += createQueryString('BOOKYEAR', chosenYears);

    }

    taxArray += ']';

    return taxArray;

}
