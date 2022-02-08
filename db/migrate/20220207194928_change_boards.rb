class ChangeBoards < ActiveRecord::Migration[6.1]
  def change
    add_column(:boards, :description, :string)
  end
end
