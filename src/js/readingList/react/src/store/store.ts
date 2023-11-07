import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice';
import resultsReducer from './slices/resultsSlice';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        results: resultsReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {filters: FiltersState, results: ResultsState}
export type AppDispatch = typeof store.dispatch
