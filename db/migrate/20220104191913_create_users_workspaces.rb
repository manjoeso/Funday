class CreateUsersWorkspaces < ActiveRecord::Migration[6.1]
  def change
    create_table :users_workspaces do |t|
      t.integer :workspace_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index(:users_workspaces, :workspace_id)
    add_index(:users_workspaces, :user_id)
  end
end
