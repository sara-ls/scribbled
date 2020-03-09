# frozen_string_literal: true

class CreateDocuments < ActiveRecord::Migration[5.2]
  def change
    create_table :documents do |t|
      t.string :format, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.boolean :private
      t.string :thumbnail_url
      t.string :document_url
      t.integer :user_id
      t.timestamps
    end

    add_index :documents, %i[title format], unique: true
  end
end
