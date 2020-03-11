export const fetchCurrentUser = () =>
  $.ajax({
    method: "GET",
    url: "/api/user",
  });
