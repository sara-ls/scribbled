class User < ApplicationRecord
  attr_reader :password

  before_validation :ensure_session_token

  validates :password_digest, :session_token, :email, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, length: { minimum: 6 }
  validates :full_name, length: { minimum: 3 }

  has_many :uploaded_docs,
    foreign_key: :user_id,
    class_name: :Document

    has_many :authored_reviews,
      foreign_key: :user_id,
      class_name: :Reviews

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64(16)
  end

end
