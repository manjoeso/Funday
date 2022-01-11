class Api::TasksController < ApplicationController

    # def index  
    # end

    # def show 
    # end

    def create 
        # debugger
        @task = Task.new(title: params[:project][:title], title: params[:project][:status], title: params[:project][:date], project_id: params[:project_id])
        if @task.save! 
            render :show
        else
            # @project = Project.new(title: 'New Project', project_id: params[:project_id])
        end
    end

    def board_params 
        # params.require(:board).permit(:title, :workspace_id)
    end
end