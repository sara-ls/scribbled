class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :user_id
      t.integer :doc_id
      t.timestamps
    end
  end
end
