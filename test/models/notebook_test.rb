# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  author_id  :integer
#  title      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class NotebookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
