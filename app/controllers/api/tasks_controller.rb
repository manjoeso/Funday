class Api::TasksController < ApplicationController

    # def index  
    # end

    # def show 
    # end

    def create 
        # debugger
        @task = Task.new(task_params)
        if @task.save! 
            render :show
        else
            render json: @task.errors.full_messages, status: 422
        end
    end
    
    def task_params 
        params.require(:task).permit(:title, :project_id)
    end
end