---

layout: page.njk
title: Virtual Bookshelf
meta: Ed Millington's virtual bookshelf

---

<h2 class="h4">
    What is this?
</h2>
<p>
    This is a list of all the books that I've read since 2021, with filters for format, genre and year.
</p>
<h2 class="h4">
    Why is it here?
</h2>
<p>
    It's fun to keep track of the books I've read, and I'm not a member of Goodreads,<span class="small"><sup>*</sup></span> so... here's where they live!
</p>
<p class="small">
    <sup>*</sup> <i>other social reading platforms are available</i>
</p>
<h2 class="h4">
    How did you build it?
</h2>
<p>
    I'm glad you asked! My virtual bookshelf is a Vue 3 app built using <a href="https://vuejs.org/guide/extras/composition-api-faq.html" target="blank">the Composition API.</a>
</p>
<p>
    The data is managed on a private Wordpress instance ("books" are a custom post type, and I'm using WP taxonomies for the filters).
</p>
<p>
    I grab the books, and the options for my filters, via GraphQL <a href="https://www.wpgraphql.com/" target="blank">(and the WPGraphQL plugin).</a> These are saved and managed in stores defined using <a href="https://pinia.vuejs.org/" target="blank">Pinia</a>.
</p>
<p>
    The app also makes use of a simple, custom-built cache, which saves the results of each GraphQL call to local storage.
</p>
<p>
    I built the app with accessibility, extendability and code simplicity in mind. If you're interested, you can <a href="https://github.com/mllngtn/edmill-11ty/tree/main/src/js/readingList" target="blank">click here to view the source code.</a>
</p>