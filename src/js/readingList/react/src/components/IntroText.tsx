import { useEffect } from 'react';
import { useAppSelector } from '../hooks';

import { generateIntroText } from '../../../shared/utils/generateIntroText';

export function IntroText() {

	const filters = useAppSelector((state) => state.filters);
	const results = useAppSelector((state) => state.results);
	const pageInfo = useAppSelector((state) => state.results.pageInfo);

	let introText = generateIntroText(
		pageInfo,
		filters.bookFormats,
		filters.bookTypes,
		filters.bookYears,
	);

	// every time the results change...
	useEffect(() => {

		// ...generate the intro text
		introText = generateIntroText(
			pageInfo,
			filters.bookFormats,
			filters.bookTypes,
			filters.bookYears,
		);

	}, [results]);

	return (
		<p dangerouslySetInnerHTML={{ __html: introText }}>
		</p>
	)

}
