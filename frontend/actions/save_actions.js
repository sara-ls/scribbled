import * as APIUtil from "../util/saves_api_util";

export const RECEIVE_SAVES = "RECEIVE_SAVES";
export const RECEIVE_SAVE = "RECEIVE_SAVE";

const receiveSaves = (saves) => ({
  type: RECEIVE_SAVES,
  saves,
});

const receiveSave = (save) => ({
  type: RECEIVE_SAVE,
  save,
});

export const fetchSavesForUser = () => (dispatch) =>
  APIUtil.fetchSavesForUser().then((saves) =>
    dispatch(receiveSaves(saves))
  );

export const createSave = (save) => (dispatch) =>
  APIUtil.createSave(save).then((saves) => dispatch(receiveSave(saves)));

export const deleteSave = (saveId) => (dispatch) =>
  APIUtil.deleteSave(saveId).then((saves) => dispatch(receiveSaves(saves)));
