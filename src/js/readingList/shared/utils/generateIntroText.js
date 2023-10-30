import { createChosenFilterArray } from './createChosenFilterArray';

/*
    This function creates our 'introText' string which looks a bit like this:

    `In 2022 I read a total of 20 audio books in the fiction genre.` ...etc.

    This string gets printed above the results
*/
export function generateIntroText(pageInfo, filters){

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

                introText += '</i>, ';

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
