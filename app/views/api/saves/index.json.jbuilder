@saves.each do |save|
  json.set! save.id do
    json.extract! save, :id, :user_id, :item_id, :item_type
  end
end