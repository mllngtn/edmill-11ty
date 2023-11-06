<template src='./templates/Pagination.html' />

<script setup lang="ts">

import { config } from '../../../shared/config/config.ts';

import { booksQuery } from '../../../shared/graphql/books.ts';

import { createTaxonomyArray } from '../../../shared/utils/createTaxonomyArray.ts';
import { useFetch } from '../../../shared/utils/useFetch.ts';

import { useFiltersStore } from '../stores/filtersStore.ts';
import { useResultsStore } from '../stores/resultsStore.ts';

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
