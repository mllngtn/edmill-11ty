import { useSelector, useDispatch } from 'react-redux';

import { updateFilter } from '../store/slices/filtersSlice.js';

export function Filter(props) {

	const { 
		id,
		name,
		filter
	} = props;

	function toggleFilter(event){

		const button = event.currentTarget;
		const expanded = button.getAttribute('aria-expanded') === 'true' || false;
		const options = button.nextElementSibling;
		const hidden = options.hidden;

		const buttons = document.querySelectorAll('.filter__button');

		for (let i = 0; i < buttons.length; i++) {

			buttons[i].setAttribute('aria-expanded', 'false');
	  		const btnOptions = buttons[i].nextElementSibling;
	  		btnOptions.hidden = true;

		}

	  	button.setAttribute('aria-expanded', !expanded);

	  	options.hidden = !hidden;

	}

	const filters = useSelector((state) => state.filters);
	const dispatch = useDispatch();

	function dispatchToUpdateFilter(target) {

		const data = {
			id: target.id,
			name: target.name,
			checked: target.checked,
		}

		dispatch(updateFilter(data));

	}

	return(
		<div className="filter">
		    <button
		        aria-expanded="false"
		        aria-controls={id}
		        onClick={toggleFilter}
		        className="button filter__button"
		    >
		        { name }
		        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="chevron"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
		    </button>
		    <ul 
		        id={id} 
		        hidden
		        className="filter__options"
		    >
		    	{
                	filter.map(function(option, i){
                		return (
                			<li key={i}>
					            <input 
					                type="checkbox" 
					                id={option.id} 
					                value={option.id}
					                name={id}
                                    checked={option.checked}
					                onChange={e => dispatchToUpdateFilter(e.target)}
					            />
					            <label className="small" htmlFor={option.id}>{ option.name }</label><br/>
					        </li>
                		)
                	})
                }
		    </ul>
		</div>
	)

}
