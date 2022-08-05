import BookShelf from "./ChangeShelf";
import React from "react";

const shelftemplate = (props) => {
  const { books, updateBook } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <BookShelf
        books={books.filter((book) => book.shelf === "currentlyReading")}
        updateBook={updateBook}
      />
      <h2 className="bookshelf-title">Want to Read</h2>
      <BookShelf
        books={books.filter((book) => book.shelf === "wantToRead")}
        updateBook={updateBook}
      />
      <h2 className="bookshelf-title">Read</h2>
      <BookShelf
        books={books.filter((book) => book.shelf === "read")}
        updateBook={updateBook}
      />
    </div>
  );
};

export default shelftemplate;
