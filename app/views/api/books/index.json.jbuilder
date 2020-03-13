@books.each do |book|
  json.set! book.id do
    json.extract! book, :id, :description, :title, :author, :cover_url, :pages, :average_rating
  end
end