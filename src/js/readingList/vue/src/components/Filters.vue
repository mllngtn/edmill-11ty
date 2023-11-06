<template src='./templates/Filters.html' />

<script setup lang="ts">

import Filter from './Filter.vue';

import { watch } from 'vue';

import { config } from '../../../shared/config/config';

import { createTaxonomyArray } from '../../../shared/utils/createTaxonomyArray';
import { useFetch } from '../../../shared/utils/useFetch';

import { booksQuery } from '../../../shared/graphql/books';

import { useFiltersStore } from '../stores/filtersStore';
import { useResultsStore } from '../stores/resultsStore';

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
