class CreateUsersTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :users_tasks do |t|
      t.integer :task_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index(:users_tasks, :user_id)
    add_index(:users_tasks, :task_id)
  end
end
