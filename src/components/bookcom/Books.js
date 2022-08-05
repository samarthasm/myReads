import React, { Component } from "react";

class Book extends Component {
  onBookShelfChange = (e) => {
    e.preventDefault();
    if (this.props.updateBook) {
      this.props.updateBook(this.props.book, e.target.value);
    }
  };
  render() {
    const { book } = this.props;
    if (!book.shelf) {
      book.shelf = "none";
    }
    if (book.title && book.imageLinks && book.authors) {
      return (
        <li className="bookcard" key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: "url(" + book.imageLinks.thumbnail + ")",
                }}
              />

              <div className="book-shelf-changer">
                <select
                  onChange={this.onBookShelfChange}
                  defaultValue={book.shelf}
                >
                  <option value="none" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            {book.authors.map((author) => (
              <div className="book-authors" key={author}>
                {author}
              </div>
            ))}
          </div>
        </li>
      );
    } else return null;
  }
}

export default Book;
