class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.integer :author_id, presence: true
      t.text :title, presence: true

      t.timestamps null: false
    end

    add_index :notebooks, :author_id
    add_index :notebooks, :title
  end
end
