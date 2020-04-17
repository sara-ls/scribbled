class Save < ApplicationRecord
  validates :user_id, :item_id, presence: true
  validates :item_id, uniqueness: { scope: :user_id }

  belongs_to :user, foreign_key: :user_id, class_name: :User
  belongs_to :item, polymorphic: true
end
