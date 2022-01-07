# == Schema Information
#
# Table name: boards
#
#  id           :bigint           not null, primary key
#  workspace_id :integer          not null
#  title        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Board < ApplicationRecord


    belongs_to :workspace,
    primary_key: :id,
    foreign_key: :workspace_id,
    class_name: :Workspace

end
