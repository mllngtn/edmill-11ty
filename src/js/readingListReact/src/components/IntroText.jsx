import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { createChosenFilterArray } from '../utils/createChosenFilterArray';

export function IntroText() {

	const filters = useSelector((state) => state.filters);
	const pageInfo = useSelector((state) => state.results.pageInfo);

	let introText = useRef(generateIntroText());

	function generateIntroText(){

		let introText = '';

		if (!pageInfo.total) {
			return;
		}

		const chosenFormats = createChosenFilterArray(filters.bookFormats);
		const chosenTypes = createChosenFilterArray(filters.bookTypes);
		const chosenYears = createChosenFilterArray(filters.bookYears);

		if (!chosenYears.length) {

			introText += 'I have read a total of <b>' + pageInfo.total + '</b> ';

		} else {

			introText += 'In <i>';

			for (let i = 0; i < chosenYears.length; i++) {

				introText += chosenYears[i];

				if (i == chosenYears.length - 2) {

					introText += '</i> and <i>';

				} else if (i !== chosenYears.length -1) {

					introText += '</i>,';

				} else {
					introText += '</i>';
				}

			}

			introText += ' I read a total of <b>' + pageInfo.total + '</b> ';

		}

		if (chosenFormats.length) {

			for (let i = 0; i < chosenFormats.length; i++) {

				introText += '<i>' + chosenFormats[i] + '</i>';

				if (i == chosenFormats.length - 2) {

					introText += ' and ';

				} else if (i !== chosenFormats.length -1) {

					introText += ', ';

				}

				introText += ' ';

			}

		}

		introText += 'books';

		if (chosenTypes.length) {

			introText += ' in the '

			for (let i = 0; i < chosenTypes.length; i++) {

				introText += '<i>' + chosenTypes[i] + '</i>';

				if (i == chosenTypes.length - 2) {

					introText += ' and ';

				} else if (i !== chosenTypes.length -1) {

					introText += ', ';

				}

				introText += ' ';

			}

			introText += 'genre';

			if (chosenTypes.length > 1) {

				introText += 's';

			}
			
		}

		if (!chosenYears.length) {

			introText += ' since January 1, 2021';

		}

		introText += '.';

		return introText;

	}

    // every time the filters change...
    useEffect(() => {
        
        // ...generate the intro text
        introText.current = generateIntroText();

    }, [filters]);

	return(
		<p dangerouslySetInnerHTML={{__html: introText.current}}>
		</p>
	)

}
