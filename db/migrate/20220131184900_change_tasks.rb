class ChangeTasks < ActiveRecord::Migration[6.1]
  def change
    remove_column(:tasks, :due_date)
    add_column(:tasks, :due_date, :date)
  end
end
