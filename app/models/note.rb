# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  title       :string           not null
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ActiveRecord::Base
  validates :title, :author, :notebook, presence: true

  belongs_to :notebook
  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User
end
