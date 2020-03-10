json.extract! document, :id, :description, :title, :format, :user_id, :thumbnail_url
json.thumbnail_url document.thumbnail_url #|| url_for(document.photo)
