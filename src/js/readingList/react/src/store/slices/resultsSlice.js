import { createSlice } from '@reduxjs/toolkit';

export const resultsSlice = createSlice({
    name: 'results',
    initialState: {
        books: null,
        loading: true,
        pageInfo: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        updateResults: (state, action) => {
            state.loading = true;
            state.books = action.payload.data.books.edges;
            state.pageInfo = action.payload.data.books.pageInfo;
            state.loading = false;
        },
        appendResults: (state, action) => {
            for (let i = 0; i < action.payload.data.books.edges.length; i++) {

                state.books.push(action.payload.data.books.edges[i]);

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
