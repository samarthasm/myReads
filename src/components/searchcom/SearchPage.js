import * as BooksAPI from "../../BooksAPI";
import React from "react";
import { Link } from "react-router-dom";
import Book from "../bookcom/Books";

class Search extends React.Component {
  state = { searchRes: "", bookList: [] };

  searchBook(searchData) {
    if (searchData) {
      this.setState({ searchRes: "searching" });
      BooksAPI.search(searchData, 3).then((data) => {
        if (data) {
          if (!data.error) {
            console.log(data);
            data = data.map((book) => {
              const bookInShelf = this.props.books.find(
                (bookIn) => bookIn.id === book.id
              );
              if (bookInShelf) {
                book.shelf = bookInShelf.shelf;
              }
              return book;
            });
            this.setState({ searchRes: "results", bookList: data });
          } else {
            this.setState({
              searchRes: "error",
              bookList: data.error,
            });
          }
        }
      });
    } else {
      this.setState({ searchRes: "noresults", bookList: null });
    }
  }

  render() {
    const { updateBook } = this.props;
    const { searchRes, bookList } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              onChange={(event) => this.searchBook(event.target.value)}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <h3>
            {searchRes === "results"
              ? " Total number of books available for you search Result is : " +
                bookList.map((book) => book).length
              : ""}
          </h3>
          <ol className="books-grid">
            {searchRes === "searching" && (
              <div className="search-book-results-msg">Searching...</div>
            )}
            {searchRes === "noresults" && (
              <div className="search-book-results-msg" />
            )}
            {searchRes === "results"
              ? bookList.map((book) => (
                  <Book key={book.id} book={book} updateBook={updateBook} />
                ))
              : ""}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
