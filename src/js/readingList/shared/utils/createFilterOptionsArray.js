/*
    Turn the results of the 'filters' graphQL
    call into a tidy array
*/
export function createFilterOptionsArray(edges) {

    const array = [];

    for (let i = 0; i < edges.length; i++) {

        array.push({
            id: edges[i].node.id,
            name: edges[i].node.name,
            slug: edges[i].node.slug,
            checked: false,
        });

    }

    return array;

}
