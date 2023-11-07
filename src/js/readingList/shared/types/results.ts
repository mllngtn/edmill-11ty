/*
    Book Interfaces
*/
export interface BookFacet {
    name: string;
}

interface BookFacetArray {
    nodes: BookFacet[];
}

export interface Book {
    id: number;
    title: string;
    bookAuthors: BookFacetArray;
    bookFormats: BookFacetArray;
    bookTypes: BookFacetArray;
    bookYears: BookFacetArray;
    featuredImage: {
        node: {
            sourceUrl: string;
        };
    };
}

export interface BookEdge {
    node: Book;
}

export interface PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string;
    startCursor: string;
    total: number;
}

export interface BookResults {
    data: {
        books: {
            edges: BookEdge[];
            pageInfo: PageInfo;
        }
    };
}
