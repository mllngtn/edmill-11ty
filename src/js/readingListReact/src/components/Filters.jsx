import { useSelector } from 'react-redux';

import { Filter } from './Filter';

export function Filters() {

    /*
        NEEDS FUNCTIONALITY FROM VUE APP!
    */

    const filters = useSelector((state) => state.filters);

    return (
        <div>
            <h2 class="h5 top-margin">
                Filter by:
            </h2>

            <Filter id="bookFormats" name="Format" filter={filters.bookFormats}/>
            <Filter id="bookTypes" name="Genre" filter={filters.bookTypes}/>
            <Filter id="bookYears" name="Year" filter={filters.bookYears}/>
        </div>
    )
};
    