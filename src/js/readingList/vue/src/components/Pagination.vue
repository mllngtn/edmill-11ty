<template src='./templates/Pagination.html' />

<script setup>

	import { config } from '../../../shared/config/config.js';

    import { booksQuery } from '../../../shared/graphql/books.js';

	import { createTaxonomyArray } from '../../../shared/utils/createTaxonomyArray.js';
	import { useFetch } from '../../../shared/utils/useFetch.js';

	import { useFiltersStore } from '../stores/filtersStore.js';
	import { useResultsStore } from '../stores/resultsStore.js';
	
	const filtersStore = useFiltersStore();
	const resultsStore = useResultsStore();

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
            useCache: false,
        });

	}

</script>
