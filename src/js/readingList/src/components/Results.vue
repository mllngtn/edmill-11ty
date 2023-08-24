<template src='./templates/Results.html' />

<script setup>

	import { ref, watch } from 'vue';

	import { useFiltersStore } from '../stores/filtersStore.js';
	import { useResultsStore } from '../stores/resultsStore.js';
	
	const filtersStore = useFiltersStore();
	const resultsStore = useResultsStore();

	import { createChosenFilterArray } from '../utils/createChosenFilterArray';

	const introText = ref();

	function generateIntroText(){

		let introText = '';

		const chosenFormats = createChosenFilterArray(filtersStore.bookFormats);
		const chosenTypes = createChosenFilterArray(filtersStore.bookTypes);
		const chosenYears = createChosenFilterArray(filtersStore.bookYears);

		if (!chosenYears.length) {

			introText += 'I have read a total of <b>' + resultsStore.pageInfo.total + '</b> ';

		} else {

			introText += 'In <i>';

			for (let i = 0; i < chosenYears.length; i++) {

				introText += chosenYears[i];

				if (i == chosenYears.length - 2) {

					introText += '</i> and <i>';

				} else if (i !== chosenYears.length -1) {

					introText += '</i>,';

				} else {
					introText += '</i>';
				}

			}

			introText += ' I read a total of <b>' + resultsStore.pageInfo.total + '</b> ';

		}

		if (chosenFormats.length) {

			for (let i = 0; i < chosenFormats.length; i++) {

				introText += '<i>' + chosenFormats[i] + '</i>';

				if (i == chosenFormats.length - 2) {

					introText += ' and ';

				} else if (i !== chosenFormats.length -1) {

					introText += ', ';

				}

				introText += ' ';

			}

		}

		introText += 'books';

		if (chosenTypes.length) {

			introText += ' in the '

			for (let i = 0; i < chosenTypes.length; i++) {

				introText += '<i>' + chosenTypes[i] + '</i>';

				if (i == chosenTypes.length - 2) {

					introText += ' and ';

				} else if (i !== chosenTypes.length -1) {

					introText += ', ';

				}

				introText += ' ';

			}

			introText += 'genre';

			if (chosenTypes.length > 1) {

				introText += 's';

			}
			
		}

		if (!chosenYears.length) {

			introText += ' since January 1, 2021';

		}

		introText += '.';

		return introText;

	}

	watch(resultsStore, () => {

        introText.value = generateIntroText();

    });

    introText.value = generateIntroText();

</script>
