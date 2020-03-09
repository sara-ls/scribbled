json.extract! document, :id, :description, :title, :format, :user_id
json.thumbnail_url document.thumbnail_url #|| url_for(document.photo)
