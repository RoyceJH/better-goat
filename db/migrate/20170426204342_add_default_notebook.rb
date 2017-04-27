class AddDefaultNotebook < ActiveRecord::Migration
  def change
    add_column :notebooks, :default, :boolean, default: false;
  end
end
