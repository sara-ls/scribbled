export const fetchBooks = () => {
  return $.ajax({
    method: "GET",
    url: "api/books"
  })
}

export const fetchBook = (id) => (
  $.ajax({
    method: "GET",
    url: `api/books/${id}`
  })
)
