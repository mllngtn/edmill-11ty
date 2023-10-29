<template src='./templates/Filters.html' />

<script setup>

	import Filter from './Filter.vue';

	import { watch } from 'vue';

	import { config } from '../../../shared/config/config.js';

    import { createTaxonomyArray } from '../../../shared/utils/createTaxonomyArray.js';
    import { useFetch } from '../../../shared/utils/useFetch.js';

    import { booksQuery } from '../../../shared/graphql/books.js';

    import { useFiltersStore } from '../stores/filtersStore.js';
	import { useResultsStore } from '../stores/resultsStore.js';

	const filtersStore = useFiltersStore();
	const resultsStore = useResultsStore();

    /*
        grab new results whenever our filters change!
    */
    watch(filtersStore, () => {

        resultsStore.setLoading(true);

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
