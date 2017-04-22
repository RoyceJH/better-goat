class AddValidations < ActiveRecord::Migration
  def change
    change_column_null :notes, :author_id, false
    change_column_null :notes, :notebook_id, false
    change_column_null :notes, :title, false
    change_column_null :notebooks, :title, false
    change_column_null :notebooks, :author_id, false
  end
end
