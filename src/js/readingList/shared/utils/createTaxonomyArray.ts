import type { FilterOption } from '../types/filters';

import { createChosenFilterArray } from './createChosenFilterArray';
import { createQueryString } from './createQueryString';

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
export function createTaxonomyArray(
    bookFormats: FilterOption[] | undefined,
    bookTypes: FilterOption[] | undefined,
    bookYears: FilterOption[] | undefined,
) {

    const chosenFormats = createChosenFilterArray(bookFormats);
    const chosenTypes = createChosenFilterArray(bookTypes);
    const chosenYears = createChosenFilterArray(bookYears);

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
