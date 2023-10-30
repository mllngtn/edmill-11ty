<template src='./templates/Results.html' />

<script setup>

	import { ref, watch } from 'vue';

	import { generateIntroText } from '../../../shared/utils/generateIntroText';

	import { useFiltersStore } from '../stores/filtersStore.js';
	import { useResultsStore } from '../stores/resultsStore.js';
	
	const filtersStore = useFiltersStore();
	const resultsStore = useResultsStore();

	const introText = ref();

	watch(resultsStore, () => {

		introText.value = generateIntroText(resultsStore.pageInfo, filtersStore);

    });

    introText.value = generateIntroText(resultsStore.pageInfo, filtersStore);

</script>
