class Book < ApplicationRecord
  validates :title, :author, :description, presence: true
end
