# == Schema Information
#
# Table name: users_workspaces
#
#  id           :bigint           not null, primary key
#  workspace_id :integer          not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class UsersWorkspace < ApplicationRecord
    
    belongs_to :users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :workspaces,
    primary_key: :id,
    foreign_key: :workspace_id,
    class_name: :Workspace
        
end
