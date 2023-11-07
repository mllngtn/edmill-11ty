import { useAppSelector, useAppDispatch } from '../hooks';

import type { FilterOption } from '../../../shared/types/filters';

import { updateFilter } from '../store/slices/filtersSlice.js';

interface FilterProps {
	id: string,
	name: string,
	filter: FilterOption[],
}

export function Filter(props: FilterProps) {

	const {
		id,
		name,
		filter
	} = props;

	function toggleFilter(event: React.MouseEvent) {

		const button = event.currentTarget as HTMLElement;
		const expanded = button.getAttribute('aria-expanded') === 'true' || false;
		const options = button.nextElementSibling as HTMLElement;
		const hidden = options.hidden;

		const buttons = document.querySelectorAll('.filter__button');

		for (let i = 0; i < buttons.length; i++) {

			buttons[i].setAttribute('aria-expanded', 'false');
			const btnOptions = buttons[i].nextElementSibling as HTMLElement;
			btnOptions.hidden = true;

		}

		const setExpandedBool = !expanded;
		button.setAttribute('aria-expanded', setExpandedBool.toString());

		options.hidden = !hidden;

	}

	const filters = useAppSelector((state) => state.filters);
	const dispatch = useAppDispatch();

	function dispatchToUpdateFilter(
		target: HTMLInputElement
	) {

		const data = {
			id: target.id,
			name: target.name,
			checked: target.checked,
		}

		dispatch(updateFilter(data));

	}

	return (
		<div className="filter">
			<button
				aria-expanded="false"
				aria-controls={id}
				onClick={toggleFilter}
				className="button filter__button"
			>
				{name}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="chevron"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
			</button>
			<ul
				id={id}
				hidden
				className="filter__options"
			>
				{
					filter.map(function (
						option: FilterOption,
						i: number
					) {
						return (
							<li key={i.toString()}>
								<input
									type="checkbox"
									id={option.id.toString()}
									value={option.id.toString()}
									name={id.toString()}
									checked={option.checked}
									onChange={e => dispatchToUpdateFilter(e.target)}
								/>
								<label className="small" htmlFor={option.id.toString()}>{option.name}</label><br />
							</li>
						)
					})
				}
			</ul>
		</div>
	)

}
