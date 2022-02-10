class UsersTask < ApplicationRecord

    belongs_to :users,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User 

    belongs_to :tasks,
    primary_key: :id,
    foreign_key: :task_id,
    class_name: :Task

end