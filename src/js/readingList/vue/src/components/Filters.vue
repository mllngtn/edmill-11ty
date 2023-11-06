<template src='./templates/Filters.html' />

<script setup lang="ts">

import Filter from './Filter.vue';

import { watch } from 'vue';

import { config } from '../../../shared/config/config.ts';

import { createTaxonomyArray } from '../../../shared/utils/createTaxonomyArray.ts';
import { useFetch } from '../../../shared/utils/useFetch.ts';

import { booksQuery } from '../../../shared/graphql/books.ts';

import { useFiltersStore } from '../stores/filtersStore.ts';
import { useResultsStore } from '../stores/resultsStore.ts';

const filtersStore = useFiltersStore();
const resultsStore = useResultsStore();

/*
    grab new results whenever our filters change!
*/
watch(filtersStore, () => {

    resultsStore.setLoading(true);

    const taxArray = createTaxonomyArray(
        filtersStore.bookFormats,
        filtersStore.bookTypes,
        filtersStore.bookYears,
    );

    useFetch({
        url: config.url,
        query: booksQuery({
            'taxArray': taxArray,
            'first': config.resultsPerPage.toString(),
            'after': '0',
        }),
        callback: resultsStore.updateResults,
    });

});


</script>
