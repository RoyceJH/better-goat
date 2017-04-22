class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :author_id, presence: true
      t.integer :notebook_id, presence: true
      t.string :title, presence: true
      t.text :body

      t.timestamps null: false
    end

    add_index :notes, :author_id
    add_index :notes, :notebook_id
    add_index :notes, :title
  end
end
