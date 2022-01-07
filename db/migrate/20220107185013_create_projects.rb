class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :board_id, null: false
      t.timestamps
    end

    add_index(:projects, :title)
    add_index(:projects, :board_id)
  end
end
