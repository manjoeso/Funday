json.workspaces do
    @user.workspaces.each do |workspace|
        json.set! workspace.id do 
            json.extract! workspace, :id, :title, :description
            json.users do
                json.array! workspace.users.each do |user|
                    json.extract! user, :id
                end
            end
        end
    end
end

# grabs the members for each workspace, dumps them all under "users" in state
json.users do 
    @user.workspaces.each do |workspace|
        workspace.users.each do |user|
            json.set! user.id do 
                json.extract! user, :id, :name, :email
            end
        end
    end
end

json.boards do
    @user.workspaces.each do |workspace|
        workspace.boards.each do |board|
            json.set! board.id do 
                json.extract! board, :id, :title, :workspace_id, :description
            end
        end
    end
end

json.projects do
    @user.workspaces.each do |workspace|
        workspace.boards.each do |board|
            board.projects.each do |project|
                json.set! project.id do 
                    json.extract! project, :id, :title, :board_id
                end
            end
        end
    end
end


json.tasks do 
    @user.workspaces.each do |workspace|
        workspace.boards.each do |board|
            board.projects.each do |project|
                project.tasks.each do |task|
                    json.set! task.id do
                        json.extract! task, :id, :title, :status, :due_date, :project_id
                        json.users do
                            json.array! task.users.each do |user|
                                json.extract! user, :id
                            end
                        end
                    end
                end
            end
        end
    end
end

