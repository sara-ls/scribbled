class AddColumnToSaves < ActiveRecord::Migration[5.2]
  def change
    add_column :saves, :item_type, :string, null: false
  end
end
