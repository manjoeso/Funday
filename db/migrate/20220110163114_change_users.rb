class ChangeUsers < ActiveRecord::Migration[6.1]
  def change
    add_column(:users, :current_workspace_id, :integer)
  end
end
