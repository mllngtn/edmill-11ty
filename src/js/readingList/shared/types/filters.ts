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
