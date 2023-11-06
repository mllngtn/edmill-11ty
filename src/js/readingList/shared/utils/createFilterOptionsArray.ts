/*
    Turn the results of the 'filters' graphQL
    call into a tidy array
*/
import type { FilterEdge, FilterOption } from '../types/interfaces.js';

export function createFilterOptionsArray(edges: FilterEdge[]): FilterOption[] {

    const array = [];

    for (let i = 0; i < edges.length; i++) {

        array.push({
            id: edges[i].node.id,
            checked: false,
            name: edges[i].node.name,
            slug: edges[i].node.slug,
        });

    }

    return array;

}
