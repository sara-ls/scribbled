import { RECEIVE_SAVE, RECEIVE_SAVES} from "../actions/save_actions";

const savesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SAVES:
      return Object.assign({}, state, action.saves);
    case RECEIVE_SAVE:
      const { save } = action;
      return Object.assign({}, state, { [save.id]: save });
    default:
      return state;
  }
};

export default savesReducer;
