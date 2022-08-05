import React, { Component } from "react";
import { Link } from "react-router-dom";
import DisplayData from "../displayData";

class listBooks extends Component {
  render() {
    const { books, updateBook } = this.props;
    console.log(books);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <div className="marquee">
                <div className="marquee__inner" aria-hidden="true">
                  <h3 className="movingText">
                    Click On Links to Change the Shelf
                  </h3>
                </div>
              </div>
              <Link to="/currentlyRead">
                <h2 className="bookshelf-title">
                  Currently Reading{" "}
                  {books.filter((book) => book.shelf === "currentlyReading")
                    .length > 1
                    ? books.filter((book) => book.shelf === "currentlyReading")
                        .length + "  Books"
                    : books.filter((book) => book.shelf === "currentlyReading")
                        .length + "  Book"}
                </h2>
              </Link>
              <DisplayData
                books={books.filter(
                  (book) => book.shelf === "currentlyReading"
                )}
                updateBook={updateBook}
              />
              <Link to="/wantToRead">
                <h2 className="bookshelf-title">
                  Want To Read{" "}
                  {books.filter((book) => book.shelf === "wantToRead").length >
                  1
                    ? books.filter((book) => book.shelf === "wantToRead")
                        .length + "  Books"
                    : books.filter((book) => book.shelf === "wantToRead")
                        .length + "  Book"}
                </h2>
              </Link>
              <DisplayData
                books={books.filter((book) => book.shelf === "wantToRead")}
                updateBook={updateBook}
              />
              <Link to="/read">
                <h2 className="bookshelf-title">
                  Want To Read{" "}
                  {books.filter((book) => book.shelf === "read").length > 1
                    ? books.filter((book) => book.shelf === "read").length +
                      "  Books"
                    : books.filter((book) => book.shelf === "read").length +
                      "  Book"}
                </h2>
              </Link>
              <DisplayData
                books={books.filter((book) => book.shelf === "read")}
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
  }
}

export default listBooks;
