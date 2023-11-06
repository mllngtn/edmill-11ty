import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { FilterOption, FilterResults } from '../../../shared/types/filters';
import { createFilterOptionsArray } from '../../../shared/utils/createFilterOptionsArray';

export const useFiltersStore = defineStore('filters', () => {

    const bookFormats = ref<FilterOption[]>();
    const bookTypes = ref<FilterOption[]>();
    const bookYears = ref<FilterOption[]>();

    function updateFilters(results: FilterResults) {

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
