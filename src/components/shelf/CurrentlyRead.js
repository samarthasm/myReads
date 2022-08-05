import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./ChangeShelf";

const CurrentlyRead = (props) => {
  const { books, updateBook } = props;
  console.log(books);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>Currently Reading Books</h1>
      </div>

      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <Link className="close-search" to="/">
              Close
            </Link>
            <BookShelf
              books={books.filter((book) => book.shelf === "currentlyReading")}
              updateBook={updateBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyRead;
