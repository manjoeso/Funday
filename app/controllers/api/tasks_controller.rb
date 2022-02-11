class Api::TasksController < ApplicationController

    def create 
        @task = Task.new(task_params)
        if @task.save! 
            render :create
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    def update 
        @task = Task.find(params[:id])
        if @task.update(task_params) 
            render :show
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    def destroy 
        @task = Task.find(params[:id])
        if @task.destroy
            render :show
        else
            render json: @task.errors.full_messages, status: 422
        end
    end
    
    def task_params 
        params.require(:task).permit(:title, :status, :due_date, :project_id)
    end
end