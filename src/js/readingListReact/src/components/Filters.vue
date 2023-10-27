<template src='./templates/Filters.html' />

<script setup>

	import Filter from './Filter.vue';

	import { watch } from 'vue';

	import { config } from '../config/config.js';

    import { booksQuery } from '../graphql/books.js';

    import { useFiltersStore } from '../stores/filtersStore.js';
	import { useResultsStore } from '../stores/resultsStore.js';

	const filtersStore = useFiltersStore();
	const resultsStore = useResultsStore();

	import { createTaxonomyArray } from '../utils/createTaxonomyArray.js';
	import { useFetch } from '../utils/useFetch.js';

    /*
        grab new results whenever our filters change!
    */
    watch(filtersStore, () => {

        const taxArray = createTaxonomyArray(filtersStore);
    
        useFetch({
            url: config.url,
            query: booksQuery({
                'taxArray': taxArray,
                'first': config.resultsPerPage,
                'after': 0,
            }),
            callback: resultsStore.updateResults,
        });

    });


</script>
