import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { FilterOption, FilterResults } from '../../../../shared/types/filters';

import { createFilterOptionsArray } from '../../../../shared/utils/createFilterOptionsArray';

interface IncomingFilter {
    id: string;
    checked: boolean;
    name: string;
}

interface FiltersState {
    bookFormats: FilterOption[],
    bookTypes: FilterOption[],
    bookYears: FilterOption[],
    loading: boolean,
}

const initialState: FiltersState = {
    bookFormats: [],
    bookTypes: [],
    bookYears: [],
    loading: true,
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateFilters: (state, action: PayloadAction<FilterResults>) => {
            state.loading = true;
            state.bookFormats = createFilterOptionsArray(action.payload.data.bookFormats.edges);
            state.bookTypes = createFilterOptionsArray(action.payload.data.bookTypes.edges);
            state.bookYears = createFilterOptionsArray(action.payload.data.bookYears.edges);
            state.loading = false;
        },
        updateFilter: (state, action: PayloadAction<IncomingFilter>) => {

            const target = action.payload;

            const filter: FilterOption[] = state[
                target.name as keyof {
                    bookFormats: FilterOption[],
                    bookTypes: FilterOption[],
                    bookYears: FilterOption[],
                }
            ];

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
