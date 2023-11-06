import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Book, BookResults } from '../../../shared/types/results';

export const useResultsStore = defineStore('results', () => {

    const books = ref<Book[]>([]);
    const loading = ref(true);
    const pageInfo = ref();

    function setLoading(status: boolean) {

        loading.value = status;

    }

    function pushResults(results: BookResults) {
        for (let i = 0; i < results.data.books.edges.length; i++) {

            books.value.push(results.data.books.edges[i].node);

        }
    }

    function updateResults(results: BookResults) {

        books.value = [];

        pushResults(results);

        pageInfo.value = results.data.books.pageInfo;

        setLoading(false);

    }

    function appendResults(results: BookResults) {

        pushResults(results);

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
