<template src='./templates/Results.html' />

<script setup lang="ts">

import { ref, watch } from 'vue';

import { generateIntroText } from '../../../shared/utils/generateIntroText';

import { useFiltersStore } from '../stores/filtersStore';
import { useResultsStore } from '../stores/resultsStore';

const filtersStore = useFiltersStore();
const resultsStore = useResultsStore();

const introText = ref();

watch(resultsStore, () => {

	introText.value = generateIntroText(
		resultsStore.pageInfo,
		filtersStore.bookFormats,
		filtersStore.bookTypes,
		filtersStore.bookYears,
	);

});

introText.value = generateIntroText(
	resultsStore.pageInfo,
	filtersStore.bookFormats,
	filtersStore.bookTypes,
	filtersStore.bookYears,
);
</script>
