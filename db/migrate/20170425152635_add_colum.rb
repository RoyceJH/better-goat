class AddColum < ActiveRecord::Migration
  def change
    add_column :notes, :preview, :string, null: false
  end
end
