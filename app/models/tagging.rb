# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  note_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ActiveRecord::Base
  validates :note_id, :tag_id, presence: true
  validates_uniquness_of :tag_id, scope: :note_id

  belongs_to :tags
  belongs_to :notes
end
