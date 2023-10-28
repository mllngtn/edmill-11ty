import { useSelector } from 'react-redux';

export function Results() {
    const books = useSelector((state) => state.results.books);

    return (
        <ul
            className="small grid books"
        >

            {
                books.map(function(book, i){
                    return (
                        <li 
                            key={i}
                            className="grid-item"
                        >
                            <picture>
                                <img 
                                    loading="lazy"
                                    src={book.node.featuredImage.node.sourceUrl} 
                                    alt=""
                                    width="200"
                                    height="300"
                                />
                            </picture>
                            <p className="grid-item__text small">
                                <span className="grid-item__title">
                                    { book.node.title }
                                </span>
                                <br/>

                                {
                                    book.node.bookAuthors.nodes.map(function(author, j){
                                        return (
                                            <span key={j}>
                                                { author.name }{ j !== book.node.bookAuthors.nodes.length - 1 && <span>, </span>}
                                            </span>
                                        )
                                    })
                                }
                                <br/>
                                {
                                    book.node.bookTypes.nodes.map(function(type, k){
                                        return (
                                            <span key={k}>
                                                <i className="small">
                                                    { type.name }
                                                </i>,&nbsp;
                                            </span>
                                        )
                                    })
                                }
                                {
                                    book.node.bookFormats.nodes.map(function(format, l){
                                        return (
                                            <i className="small"  key={l}>
                                                { format.name }
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
