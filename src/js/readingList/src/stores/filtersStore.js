import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFiltersStore = defineStore('filters', () => {

    const bookFormats = ref();
    const bookTypes = ref();
    const bookYears = ref();

    function createFilterArray(edges) {

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

    function updateFilters(results) {

        bookFormats.value = createFilterArray(results.data.bookFormats.edges);
        bookTypes.value = createFilterArray(results.data.bookTypes.edges);
        bookYears.value = createFilterArray(results.data.bookYears.edges);

    }

    return {
        bookFormats,
        bookTypes,
        bookYears,
        updateFilters,
    };

});
