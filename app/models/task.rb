class Task < ApplicationRecord   

    has_many :associated_users,
    primary_key: :id,
    foreign_key: :task_id,
    class_name: :UsersTask

    has_many :users,
    through: :associated_users,
    source: :users

    belongs_to :project,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Project

end
