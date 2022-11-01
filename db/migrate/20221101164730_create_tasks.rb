class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :heading
      t.string :body
      t.boolean :complete
      t.integer :user_id
      t.integer :category_id
      t.timestamps
    end
  end
end
