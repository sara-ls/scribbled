@documents.each do |document|
  json.set! document.id do
    json.extract! document, :id, :description, :title, :format, :user_id
  end
end