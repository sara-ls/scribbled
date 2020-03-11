import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import documentsReducer from "./documents_reducer";
import booksReducer from "./books_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  books: booksReducer,
  documents: documentsReducer
});

export default entitiesReducer;