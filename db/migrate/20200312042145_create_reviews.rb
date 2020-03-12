class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :book_id, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
      t.text :review_text

      t.timestamps
    end
  end
end
