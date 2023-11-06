/*
    Filter Interfaces
*/
export interface FilterOption {
    id: number;
    checked: boolean;
    name: string;
    slug: string;
}

export interface FilterEdge {
    node: FilterOption;
}

interface FilterEdges {
    edges: FilterEdge[];
}

export interface FilterResults {
    data: {
        bookFormats: FilterEdges;
        bookTypes: FilterEdges;
        bookYears: FilterEdges;
    }
}

/*
    Book Interfaces
*/
interface BookFacet {
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
        edges: BookEdge[];
        pageInfo: PageInfo;
    };
}
