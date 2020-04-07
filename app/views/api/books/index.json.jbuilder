@books.each do |book|
  json.set! book.id do
    json.extract! book, :id, :description, :title, :author, :cover_url, :pages, :average_rating
    # json.photoURL url_for(book.photo)
  end
end