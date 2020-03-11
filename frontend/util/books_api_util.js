export const fetchBooks = () => (
  $.ajax({
    method: "GET",
    url: "api/books"
  })
)

