---

layout: page.njk
title: Virtual Bookshelf
meta: Ed Millington's virtual bookshelf

---

<details class="top-margin" open>
    <summary class="h5">
        What is this?
    </summary>
    <p>
        This is a list of all the books that I've read since 2021, with filters for format, genre and year.
    </p>
</details>
<details>
    <summary class="h5">
        Why is it here?
    </summary>
    <p>
        It's fun to keep track of the books I've read, and I'm not a member of Goodreads,<span class="small"><sup>*</sup></span> so... here's where they live!
    </p>
    <p class="small">
        <sup>*</sup> <i>other social reading platforms are available</i>
    </p>
</details>


<details>
    <summary class="h5">
        How did you build it?
    </summary>
    <p>
        I'm glad you asked! My virtual bookshelf is a Vue 3 app built using the Composition API.
    </p>
    <p>
        The data is managed on a private Wordpress instance ("books" are a custom post type, and I'm using WP taxonomies for the filters).
    </p>
    <p>
        I grab the books, and the options for my filters, via <a href="https://github.com/mllngtn/edmill-11ty/blob/main/src/js/readingList/src/graphql/books.js" title="code example of a GraphQL query" target="_blank">GraphQL</a>.</a> These are saved and managed in stores defined using <a href="https://github.com/mllngtn/edmill-11ty/blob/main/src/js/readingList/src/stores/resultsStore.js" title="code example of a Pinia store" target="blank">Pinia</a>.
    </p>
    <p>
        The app also makes use of a simple, <a href="https://github.com/mllngtn/edmill-11ty/blob/main/src/js/readingList/src/utils/useFetch.js" title="code example of a cached fetch call" target="_blank">custom-built cache</a>, which saves the results of each GraphQL call to local storage.
    </p>
    <p>
        I built the app with accessibility, extendability and code simplicity in mind. If you're interested, you can <a href="https://github.com/mllngtn/edmill-11ty/tree/main/src/js/readingList" target="blank">click here to view the source code.</a>
    </p>
</details>
