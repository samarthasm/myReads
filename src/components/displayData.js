import React from "react";

const DisplayData = (props) => {
  const { books } = props;
  console.log(books);
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <li className="bookcard" key={book.id}>
            <div className="book">
              <div className="book-top">
                {book.imageLinks ? (
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: "url(" + book.imageLinks.thumbnail + ")",
                    }}
                  />
                ) : (
                  "No Images Available"
                )}
              </div>
              {book.title ? (
                <div className="book-title">{book.title}</div>
              ) : (
                "Title Not Available"
              )}
              {book.authors
                ? book.authors.map((author) => (
                    <div className="book-authors" key={author}>
                      {author}
                    </div>
                  ))
                : "Author Not Available"}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default DisplayData;
