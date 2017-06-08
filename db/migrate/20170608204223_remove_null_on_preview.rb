class RemoveNullOnPreview < ActiveRecord::Migration
  def change
    change_column_null :notes, :preview, true
  end
end
