import * as APIUtil from "../util/books_api_util";

export const RECEIVE_TOP_BOOKS = "RECEIVE_TOP_BOOKS";

const receiveDocuments = books => ({
  type: RECEIVE_TOP_BOOKS,
  books
});


export const fetchBooks = () => dispatch =>
  APIUtil.fetchBooks().then(books =>
    dispatch(receiveBooks(books))
  );