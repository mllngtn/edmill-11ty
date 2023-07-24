export function booksQuery({
    taxArray = '[]',
}) {
    return JSON.stringify({
        query: `
            query Books {
                books(
                    where: {
                        taxQuery: {
                            relation: OR,
                            taxArray: ` + taxArray + `
                        }
                    }
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
                }
            }
        `,
    });
}
