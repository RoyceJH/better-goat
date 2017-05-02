# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer
#

class Tag < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true

  has_many :taggings

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
