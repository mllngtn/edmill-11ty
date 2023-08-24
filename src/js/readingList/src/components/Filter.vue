<template src='./templates/Filter.html' />

<script setup>

	import { computed } from 'vue';

	const props = defineProps({
	  name: String,
	  filter: Object,
	  id: String
	});

	// computed property that auto-updates when the prop changes
	const id = computed(() => props.id);
	const name = computed(() => props.name);
	const filter = computed(() => props.filter);

	function toggleFilter(event){

		const button = event.currentTarget;
		const expanded = button.getAttribute('aria-expanded') === 'true' || false;
		const options = button.nextElementSibling;
		const hidden = options.hidden;

		const buttons = document.querySelectorAll('.filter__button');

		for (let i = 0; i < buttons.length; i++) {

			buttons[i].setAttribute('aria-expanded', 'false');
	  		const btnOptions = buttons[i].nextElementSibling;
	  		btnOptions.hidden = true;

		}

	  	button.setAttribute('aria-expanded', !expanded);

	  	options.hidden = !hidden;

	}

</script>
