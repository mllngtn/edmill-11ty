import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Book, BookResults, PageInfo } from '../../../../shared/types/results';

interface resultsState {
    books: Book[],
    loading: boolean,
    pageInfo: PageInfo
}

const initialState: resultsState = {
    books: [],
    loading: true,
    pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        endCursor: '',
        startCursor: '',
        total: 0,
    }
}

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        updateResults: (state, action: PayloadAction<BookResults>) => {
            for (let i = 0; i < action.payload.data.books.edges.length; i++) {

                state.books.push(action.payload.data.books.edges[i].node);

            }
            state.pageInfo = action.payload.data.books.pageInfo;
        },
        appendResults: (state, action: PayloadAction<BookResults>) => {
            for (let i = 0; i < action.payload.data.books.edges.length; i++) {

                state.books.push(action.payload.data.books.edges[i].node);

            }

            // retain 'total' value from original query
            const total = state.pageInfo.total;

            state.pageInfo = action.payload.data.books.pageInfo;

            state.pageInfo.total = total;

            state.loading = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLoading, updateResults, appendResults } = resultsSlice.actions;

export default resultsSlice.reducer;
