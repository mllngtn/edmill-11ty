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

		const button = event.target;

		const expanded = button.getAttribute('aria-expanded') === 'true' || false;
	  	button.setAttribute('aria-expanded', !expanded);

	  	const options = button.nextElementSibling;
	  	options.hidden = !options.hidden;

	}

</script>
