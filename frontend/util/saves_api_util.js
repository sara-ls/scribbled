export const fetchSavesForUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: "api/user/saves"
  });
};

// export const fetchSaves = () => {
//   return $.ajax({
//     method: "GET",
//     url: `api/books/${id}`
//   });
// };

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
