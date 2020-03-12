class Review < ApplicationRecord
  validates :book_id, :user_id, presence: true
  validates :rating, inclusion: [1, 2, 3,4,5]

  validates :user_id, uniqueness: { scope: :book_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book

end
