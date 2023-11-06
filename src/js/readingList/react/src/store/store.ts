import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice';
import resultsReducer from './slices/resultsSlice';

export default configureStore({
    reducer: {
        filters: filtersReducer,
        results: resultsReducer,
    },
})
