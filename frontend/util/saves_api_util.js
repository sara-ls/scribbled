export const fetchSavesForUser = () => {
  return $.ajax({
    method: "GET",
    url: `api/user/saves`
  });
};

export const createSave = save => {
  return $.ajax({
    method: "POST",
    url: `api/user/saves`,
    data: { save }
  });
};

export const deleteSave = saveId => {
  return $.ajax({
    method: "DELETE",
    url: `api/user/saves/${saveId}`
  });
};
