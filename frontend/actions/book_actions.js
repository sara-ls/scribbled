import * as APIUtil from "../util/books_api_util";

export const RECEIVE_ALL_BOOKS = "RECEIVE_ALL_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";

const receiveBooks = books => ({
  type: RECEIVE_ALL_BOOKS,
  books
});

const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});

export const fetchBooks = () => dispatch =>
  APIUtil.fetchBooks().then(books => dispatch(receiveBooks(books)));

export const fetchBook = id => dispatch =>
  APIUtil.fetchBook(id).then(book => dispatch(receiveBook(book)));
