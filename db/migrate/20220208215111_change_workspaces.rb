class ChangeWorkspaces < ActiveRecord::Migration[6.1]
  def change
    add_column(:workspaces, :description, :string)
  end
end
