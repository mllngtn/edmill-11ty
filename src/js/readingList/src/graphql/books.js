export function booksQuery({
    taxArray = '[]',
    first = null,
    after = null,
    last = null,
    before = null,
}) {

    return JSON.stringify({
        query: `
            query Books {
                books(
                    where: {
                        taxQuery: {
                            relation: AND,
                            taxArray: ` + taxArray + `
                        }
                    }
                    first: ` + first + `
                    after: "` + after + `"
                    last: ` + last + `
                    before: "` + before + `"
                ) {
                    edges {
                        node {
                            id
                            title
                            bookTypes {
                                nodes {
                                    name
                                }
                            }
                            bookYears {
                                nodes {
                                    name
                                }
                            }
                            bookAuthors {
                                nodes {
                                    name
                                }
                            }
                            bookFormats {
                                nodes {
                                    name
                                }
                            }
                            featuredImage {
                                node {
                                    sourceUrl(size: MEDIUM)
                                }
                            }
                        }
                    }
                    pageInfo {
                        hasNextPage
                        hasPreviousPage
                        endCursor
                        startCursor
                        total
                    }
                }
            }
        `,
    });

}
