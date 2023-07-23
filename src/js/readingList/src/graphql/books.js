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
                        }
                    }
                }
            }
        `,
    });
}
