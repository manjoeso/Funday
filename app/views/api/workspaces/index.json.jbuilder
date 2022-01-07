

    #json.workspaces @user.workspaces do |workspace|
   # json.workspaces @user.workspaces do |workspace| # switch this one and below line if needed
        #json.set! @user.id do
            #debugger
           # json.id workspace.id
           # json.title workspace.title
         #   json.users workspace.users do |user| 
           #     json.name user.name
         #   end
           # json.set! workspace.id do
              #  json.boards workspace.boards do |board|
              #      json.id board.id
              #      json.title board.title
              #  end
            #end
        #end
    #end
 

    json.array! @user.workspaces do |workspace|
        #json.array!(workspace)
        #json.set! workspace.id do
            json.id workspace.id
            json.title workspace.title
            json.users workspace.users do |user| 
                json.name user.name
            end
            json
            json.boards workspace.boards do |board|
                json.board_id board.id
                json.title board.title
            end
        #end
    end
    #end
    
#             json.set! workspace.id do 
#             end
#         end
#      end
# end

    #     json.projects board.project do |project|
    #         json.project_id project.id
    #         json.title project.title
    #         json.tasks project.tasks do |task|
    #             json.task_id task.id
    #             json.title task.title
    #             json.status task.status
    #             json.due_date task.due_date
    #         end
    #     end
    # end
