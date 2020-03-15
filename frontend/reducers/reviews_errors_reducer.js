import {
  CLEAR_REVIEWS_ERRORS, RECEIVE_REVIEWS_ERRORS, RECEIVE_REVIEW
} from "../actions/book_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS_ERRORS:
      return Object.assign([], action.errors);
    case RECEIVE_REVIEW:
      return [];
    case CLEAR_REVIEWS_ERRORS:
      return [];
    default:
      return state;
  }
};
