class AddColumnToTags < ActiveRecord::Migration
  def change
    add_column :tags, :author_id, :integer
    add_index :tags, :author_id
  end
end
