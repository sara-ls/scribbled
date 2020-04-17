json.partial! "api/users/user", user: @user
json.uploadedDocIds @user.uploaded_docs.pluck(:id)
# json.savedItemIds @user.saved_items.pluck(:id)

# json.reviewIds @user.authored_reviews.pluck(:id)
# json.reviewedBookIds @user.reviewed_books.pluck(:id)
