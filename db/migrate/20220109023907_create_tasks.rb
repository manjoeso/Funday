class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.string :status
      t.datetime :due_date
      t.timestamps
    end
    
    add_index(:tasks, :project_id)
    add_index(:tasks, :title)

  end
end
