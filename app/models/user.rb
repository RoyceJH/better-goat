# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  # has_attached_file :image, default_url: "evergoat-logo.png"
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  has_many :notebooks, dependent: :destroy,
           primary_key: :id,
           foreign_key: :author_id,
           class_name: :Notebook

  has_many :notes,
           primary_key: :id,
           foreign_key: :author_id,
           class_name: :Note

  has_many :tags, dependent: :destroy,
           primary_key: :id,
           foreign_key: :author_id,
           class_name: :Tag

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    if user && BCrypt::Password.new(user.password_digest).is_password?(password)
      return user
    end

    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
