export function filtersQuery() {

    return JSON.stringify({
        query: `
            query Filters {
                bookFormats {
                    edges {
                        node {
                            id
                            name
                            slug
                        }
                    }
                }
                bookTypes {
                    edges {
                        node {
                            id
                            name
                            slug
                        }
                    }
                }
                bookYears {
                    edges {
                        node {
                            id
                            name
                            slug
                        }
                    }
                }
            }
        `,
    });

}
