class Document < ApplicationRecord
  validates :title, :description, presence: true
  validates :title, :description, length: { minimum: 2 }
  validates :title, uniqueness: { scope: :format }

  validate :ensure_file

  belongs_to :user
  has_many :saves, as: :item

  has_one_attached :file

  def ensure_file 
    unless self.file.attached?
      errors[:documents] << "Must have file attached"
    end
  end
end
