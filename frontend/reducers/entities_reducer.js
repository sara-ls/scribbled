import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import documentsReducer from "./documents_reducer";
import booksReducer from "./books_reducer";
import reviewsReducer from "./reviews_reducer";
import savesReducer from "./saves_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  books: booksReducer,
  reviews: reviewsReducer,
  documents: documentsReducer,
  saves: savesReducer,
});

export default entitiesReducer;
