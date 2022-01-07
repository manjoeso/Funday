

json.workspaces do
    json.set! @user.id do 
        json.array! @user.workspaces do |workspace|
        # @user.workspaces.each do |workspace| 
            json.extract! workspace, :id, :title
        end
    end
end

json.boards do
    @user.workspaces.each do |workspace|
        json.set! workspace.id do
            json.array! workspace.boards do |board|
               json.extract! board, :id, :title
            end
        end
    end
end


json.projects do
    @user.workspaces.each do |workspace|
        workspace.boards.each do |board|
            json.set! board.id do
                json.array! board.projects do |project|
                json.extract! project, :id, :title
                end
            end
        end
    end
end

