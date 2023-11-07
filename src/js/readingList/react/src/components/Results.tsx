import { useSelector } from 'react-redux';

import type { BookFacet, Book } from '../../../shared/types/results';
import { useAppSelector } from '../hooks';

export function Results() {
    const books = useAppSelector((state) => state.results.books);

    return (
        <ul
            className="small grid books"
        >

            {
                books.map(function (
                    book: Book,
                    i: number
                ) {
                    return (
                        <li
                            key={i}
                            className="grid-item"
                        >
                            <picture>
                                <img
                                    loading="lazy"
                                    src={book.featuredImage.node.sourceUrl}
                                    alt=""
                                    width="200"
                                    height="300"
                                />
                            </picture>
                            <p className="grid-item__text small">
                                <span className="grid-item__title">
                                    {book.title}
                                </span>
                                <br />

                                {
                                    book.bookAuthors.nodes.map(function (
                                        author: BookFacet,
                                        j: number
                                    ) {
                                        return (
                                            <span key={j}>
                                                {author.name}{j !== book.bookAuthors.nodes.length - 1 && <span>, </span>}
                                            </span>
                                        )
                                    })
                                }
                                <br />
                                {
                                    book.bookTypes.nodes.map(function (
                                        type: BookFacet,
                                        k: number
                                    ) {
                                        return (
                                            <span key={k}>
                                                <i className="small">
                                                    {type.name}
                                                </i>,&nbsp;
                                            </span>
                                        )
                                    })
                                }
                                {
                                    book.bookFormats.nodes.map(function (
                                        format: BookFacet,
                                        l: number
                                    ) {
                                        return (
                                            <i className="small" key={l}>
                                                {format.name}
                                            </i>
                                        )
                                    })
                                }
                            </p>
                        </li>
                    );
                })
            }
        </ul>
    )
};
