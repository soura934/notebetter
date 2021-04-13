class CreateNotebook < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.string :title, null: false
      t.integer :user_id, null: false 

      t.timestamps
    end

    
  end
end
