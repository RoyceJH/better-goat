# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  title      :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ActiveRecord::Base
  validates :author, :title, presence: true

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User
  has_many :notes
end
