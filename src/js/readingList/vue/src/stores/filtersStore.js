import { defineStore } from 'pinia';
import { ref } from 'vue';

import { createFilterOptionsArray } from '../../../shared/utils/createFilterOptionsArray.js';

export const useFiltersStore = defineStore('filters', () => {

    const bookFormats = ref();
    const bookTypes = ref();
    const bookYears = ref();

    function updateFilters(results) {

        bookFormats.value = createFilterOptionsArray(results.data.bookFormats.edges);
        bookTypes.value = createFilterOptionsArray(results.data.bookTypes.edges);
        bookYears.value = createFilterOptionsArray(results.data.bookYears.edges);

    }

    return {
        bookFormats,
        bookTypes,
        bookYears,
        updateFilters,
    };

});
