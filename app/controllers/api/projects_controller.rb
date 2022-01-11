class Api::ProjectsController < ApplicationController

    # def index  
    # end

    # def show 
    # end

    def create 
        # debugger
        @project = Project.new(title: params[:project][:title], board_id: params[:board_id])
        if @project.save! 
            render :show
        else
            @project = Project.new(title: 'New Project', board_id: params[:board_id])
        end
    end

    def board_params 
        # params.require(:board).permit(:title, :workspace_id)
    end
end