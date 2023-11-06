<template src='./templates/Filter.html' />

<script setup lang="ts">

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

function toggleFilter(event: Event) {

    const button = event.currentTarget as HTMLElement;
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
    const options = button.nextElementSibling as HTMLElement;
    const hidden = options.hidden;

    const buttons = document.querySelectorAll('.filter__button');

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].setAttribute('aria-expanded', 'false');
        const btnOptions = buttons[i].nextElementSibling as HTMLElement;
        btnOptions.hidden = true;

    }

    const setExpandedBool = !expanded;
    button.setAttribute('aria-expanded', setExpandedBool.toString());

    options.hidden = !hidden;

}

</script>
