# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Workspace < ApplicationRecord
    validates :title, presence: true
    
    has_many :associated_users,
    primary_key: :id,
    foreign_key: :workspace_id,
    class_name: :UsersWorkspace

    has_many :users,
    through: :associated_users,
    source: :users
    
end
