<template src='./components/templates/App.html' />

<script setup lang="ts">

import { config } from '../../shared/config/config';

import { booksQuery } from '../../shared/graphql/books';
import { filtersQuery } from '../../shared/graphql/filters';

import { useFetch } from './../../shared/utils/useFetch';

import Filters from './components/Filters.vue';
import Results from './components/Results.vue';
import Pagination from './components/Pagination.vue';

import { useResultsStore } from './stores/resultsStore';
import { useFiltersStore } from './stores/filtersStore';

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
