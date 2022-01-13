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

    def update 
        @project = Project.find(params[:id])
        if @project.update(project_params) 
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def destroy 
        @project = Project.find(params[:id])
        if @project.destroy
            render :show
        else
            render json: @project.errors.full_messages, status: 422
        end
    end

    def project_params 
        params.require(:project).permit(:title, :board_id)
    end
end