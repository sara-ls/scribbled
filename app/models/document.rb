class Document < ApplicationRecord
  validates :title, :description, presence: true
  validates :title, :description, length: { minimum: 2 }
  validates :title, uniqueness: { scope: :format }

  belongs_to :user
end
