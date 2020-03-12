json.extract! @book, :id, :description, :title, :author, :publisher, :isbn, :pages, :release_date, :cover_url, :reviews
json.average_rating @book.average_rating
