import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useResultsStore = defineStore('results', () => {

    const books = ref();
    const loading = ref(true);
    const pageInfo = ref('');

    function setLoading(status) {

        loading.value = status;

    }

    function updateResults(results) {

        books.value = results.data.books.edges;

        pageInfo.value = results.data.books.pageInfo;

        setLoading(false);

    }

    function appendResults(results) {

        for (let i = 0; i < results.data.books.edges.length; i++) {

            books.value.push(results.data.books.edges[i]);

        }

        // retain 'total' value from original query
        const total = pageInfo.value.total;

        pageInfo.value = results.data.books.pageInfo;

        pageInfo.value.total = total;

        setLoading(false);

    }

    return {
        books,
        loading,
        pageInfo,
        setLoading,
        updateResults,
        appendResults,
    };

});
