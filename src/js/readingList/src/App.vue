<template src='./components/templates/App.html' />

<script setup>

    import { useFetch } from './utils/useFetch.js';
    import { booksQuery } from './graphql/books.js';

    function doCallback(data) {
        console.log(data);
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
