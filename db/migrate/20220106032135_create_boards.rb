class CreateBoards < ActiveRecord::Migration[6.1]
  def change
    create_table :boards do |t|
      t.integer :workspace_id, null: false 
      t.string :title, null: false
      t.timestamps
    end
    
    add_index(:boards, :title)
    add_index(:boards, :workspace_id)
    
  end
end
