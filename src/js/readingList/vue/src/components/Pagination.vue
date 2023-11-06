<template src='./templates/Pagination.html' />

<script setup lang="ts">

import { config } from '../../../shared/config/config';

import { booksQuery } from '../../../shared/graphql/books';

import { createTaxonomyArray } from '../../../shared/utils/createTaxonomyArray';
import { useFetch } from '../../../shared/utils/useFetch';

import { useFiltersStore } from '../stores/filtersStore';
import { useResultsStore } from '../stores/resultsStore';

const filtersStore = useFiltersStore();
const resultsStore = useResultsStore();

function loadMore() {

    const taxArray = createTaxonomyArray(
        filtersStore.bookFormats,
        filtersStore.bookTypes,
        filtersStore.bookYears,
    );

    useFetch({
        url: config.url,
        query: booksQuery({
            taxArray: taxArray,
            first: config.resultsPerPage.toString(),
            after: resultsStore.pageInfo.endCursor,
        }),
        callback: resultsStore.appendResults,
        useCache: false,
    });

}

</script>
