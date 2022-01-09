class Task < ApplicationRecord   

    belongs_to :project,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Project

end
