<template src='./components/templates/App.html' />

<script setup>

    import Filters from './components/Filters.vue';
    import Results from './components/Results.vue';
    import Pagination from './components/Pagination.vue';

    import { config } from './config/config.js';

    import { booksQuery } from './graphql/books.js';
    import { filtersQuery } from './graphql/filters.js';

    import { useResultsStore } from './stores/resultsStore.js';
    import { useFiltersStore } from './stores/filtersStore.js';

    const resultsStore = useResultsStore();
    const filtersStore = useFiltersStore();

    import { useFetch } from './utils/useFetch.js';

    // 1: setup filters
    useFetch({
        url: config.url,
        query: filtersQuery(),
        callback: filtersStore.updateFilters,
    });

    // 2: grab initial results
    useFetch({
        url: config.url,
        query: booksQuery({
            'taxArray': `[]`,
            'first': config.resultsPerPage,
            'after': 0,
        }),
        callback: resultsStore.updateResults,
    });

</script>
