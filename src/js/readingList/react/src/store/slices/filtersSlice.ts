import { createSlice } from '@reduxjs/toolkit';

import { createFilterOptionsArray } from '../../../../shared/utils/createFilterOptionsArray';

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        bookFormats: null,
        bookTypes: true,
        bookYears: null,
        loading: true,
    },
    reducers: {
        updateFilters: (state, action) => {
            state.loading = true;
            state.bookFormats = createFilterOptionsArray(action.payload.data.bookFormats.edges);
            state.bookTypes = createFilterOptionsArray(action.payload.data.bookTypes.edges);
            state.bookYears = createFilterOptionsArray(action.payload.data.bookYears.edges);
            state.loading = false;
        },
        updateFilter: (state, action) => {

            const target = action.payload;

            const filter = state[target.name];

            for (let i = 0; i < filter.length; i++) {

                if (filter[i].id === target.id) {

                    filter[i].checked = target.checked;

                    return;
                }

            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateFilters, updateFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
