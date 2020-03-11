import * as APIUtil from "../util/user_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const fetchCurrentUser = () => dispatch =>
  APIUtil.fetchCurrentUser().then(
    user => dispatch(receiveCurrentUser(user))
  );
