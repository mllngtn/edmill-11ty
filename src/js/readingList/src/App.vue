<template src='./components/templates/App.html' />

<script setup>

    import { ref } from 'vue';

    import { useFetch } from './utils/useFetch.js';
    import { booksQuery } from './graphql/books.js';

    const results = ref();

    function doCallback(json) {
        
        results.value = json.data.books.edges;

    };

    useFetch({
        url: 'https://blog.edmill.co.uk/graphql',
        query: booksQuery({
            'taxArray': `[ 
                {
                    taxonomy: BOOKAUTHOR, 
                    operator: IN, 
                    field: NAME, 
                    terms: ["Wendy Liu", "Agatha Christie"]
                }
            ]`
        }),
        callback: doCallback,
    });

</script>
