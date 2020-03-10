json.document do
  json.extract! @document, :id, :description, :title, :format, :user_id
end