class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.integer :pages
      t.text :description, null: false
      t.string :publisher
      t.string :cover_url
      t.integer :isbn
      t.date :release_date

      t.timestamps
    end
  end
end
