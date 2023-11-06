import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { generateIntroText } from '../../../shared/utils/generateIntroText';

export function IntroText() {

	const filters = useSelector((state) => state.filters);
	const results = useSelector((state) => state.results);
	const pageInfo = useSelector((state) => state.results.pageInfo);

	let introText = generateIntroText(pageInfo, filters);

    // every time the results change...
    useEffect(() => {
        
        // ...generate the intro text
        introText = generateIntroText(pageInfo, filters);

    }, [results]);

	return(
		<p dangerouslySetInnerHTML={{__html: introText}}>
		</p>
	)

}
