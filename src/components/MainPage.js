import React from "react";
import * as BooksAPI from "../BooksAPI";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBooks from "./searchcom/SearchPage";
import ListBooks from "./bookcom/ListBooks";
import CurrentlyRead from "./shelf/CurrentlyRead";
import WantoToRead from "./shelf/wantToRead";
import Read from "./shelf/Read";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  constructor(props) {
    super(props);
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  updateBookInShelf = (book, shelf) => {
    book.shelf = shelf;
    if (this.state.books.indexOf(book) < 0) {
      this.state.books.push(book);
    }

    BooksAPI.update(book, shelf).then(
      this.setState((prevState, props) => {
        return {
          books: prevState.books.map((bookFound) =>
            bookFound.id === book.id ? book : bookFound
          ),
        };
      })
    );
  };
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ListBooks
                  books={this.state.books}
                  updateBook={this.updateBookInShelf}
                />
              }
            />

            <Route
              exact
              path="/search"
              element={
                <SearchBooks
                  books={this.state.books}
                  updateBook={this.updateBookInShelf}
                />
              }
            />
            <Route
              exact
              path="/currentlyRead"
              element={
                <CurrentlyRead
                  books={this.state.books}
                  updateBook={this.updateBookInShelf}
                />
              }
            />
            <Route
              exact
              path="/wantToRead"
              element={
                <WantoToRead
                  books={this.state.books}
                  updateBook={this.updateBookInShelf}
                />
              }
            />
            <Route
              exact
              path="/read"
              element={
                <Read
                  books={this.state.books}
                  updateBook={this.updateBookInShelf}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
