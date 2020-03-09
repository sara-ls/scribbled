json.partial! "api/users/user", user: @user
json.uploadedDocIds @user.uploaded_docs.pluck(:id)
