class CreateSaves2 < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :user_id, null: false
      t.integer :item_id, null: false
      t.integer :list_id
      t.timestamps
    end

    add_index :saves, [:user_id, :item_id], unique: true
  end
end
