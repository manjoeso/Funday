class ChangeUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column(:users, :fname)
    remove_column(:users, :lname)

    add_column(:users, :name, :string)
  end
end
