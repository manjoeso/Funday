json.workspaces @user.workspaces do |workspace|
    json.workspace_id workspace.id
    json.title workspace.title
    json.users workspace.users do |user|
        json.name user.name
    end
    # json.board workspace.boards do |board|
    #     json.board_id board.id
    #     json.title board.title
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
end