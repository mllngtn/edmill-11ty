<template src='./templates/Pagination.html' />

<script setup>

	import { config } from '../config/config.js';

    import { booksQuery } from '../graphql/books.js';

	import { useFiltersStore } from '../stores/filtersStore.js';
	import { useResultsStore } from '../stores/resultsStore.js';
	
	const filtersStore = useFiltersStore();
	const resultsStore = useResultsStore();

	import { createTaxonomyArray } from '../utils/createTaxonomyArray.js';
	import { useFetch } from '../utils/useFetch.js';

	function loadMore(){

		const taxArray = createTaxonomyArray(filtersStore);
    
        useFetch({
            url: config.url,
            query: booksQuery({
                'taxArray': taxArray,
                'first': config.resultsPerPage,
                'after': resultsStore.pageInfo.endCursor,
            }),
            callback: resultsStore.appendResults,
        });

	}

</script>
