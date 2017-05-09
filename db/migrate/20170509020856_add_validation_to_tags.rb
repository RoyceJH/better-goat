class AddValidationToTags < ActiveRecord::Migration
  def change
    change_column_null :tags, :author_id, false
  end
end
