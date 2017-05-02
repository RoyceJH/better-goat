class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :title, null: false
      t.timestamps null: false
    end

    add_index :tags, :title, unique: true
  end
end
