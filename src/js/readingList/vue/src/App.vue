<template src='./components/templates/App.html' />

<script setup lang="ts">

import { config } from '../../shared/config/config.ts';

import { booksQuery } from '../../shared/graphql/books.ts';
import { filtersQuery } from '../../shared/graphql/filters.ts';

import { useFetch } from './../../shared/utils/useFetch.ts';

import Filters from './components/Filters.vue';
import Results from './components/Results.vue';
import Pagination from './components/Pagination.vue';

import { useResultsStore } from './stores/resultsStore.ts';
import { useFiltersStore } from './stores/filtersStore.ts';

const resultsStore = useResultsStore();
const filtersStore = useFiltersStore();

// 1: setup filters
useFetch({
    url: config.url,
    query: filtersQuery(),
    callback: filtersStore.updateFilters,
});

// 2: grab initial results
resultsStore.setLoading(true);

useFetch({
    url: config.url,
    query: booksQuery({
        'taxArray': `[]`,
        'first': config.resultsPerPage.toString(),
        'after': '0',
    }),
    callback: resultsStore.updateResults,
});

</script>
