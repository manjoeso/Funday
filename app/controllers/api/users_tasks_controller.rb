class Api::UsersTasksController < ApplicationController

    def create 
        @users_task = UsersTask.new(users_task_params)
        if @users_task.save! 
            render :show
        else
            render json: @users_task.errors.full_messages, status: 422
        end
    end

    def destroy 
        @users_task = UsersTask.find(params[:id])
        if @users_task.destroy 
            render :show
        else
            render json: @users_task.errors.full_messages, status: 422
        end
    end

    def users_task_params 
        params.require(:users_task).permit(:user_id, :task_id)
    end


end