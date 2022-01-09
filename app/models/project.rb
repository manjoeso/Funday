# == Schema Information
#
# Table name: projects
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Project < ApplicationRecord   

    belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board

    has_many :tasks,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :Task

end
