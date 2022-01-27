class Api::WorkspacesController < ApplicationController

    def index
        @user = User.find(params[:user_id]) 
        render :index
    end 
    
    def edit
        
    end
    
    def show
        
    end
    
    def create 
        @workspace = Workspace.new(title: params[:workspace][:title])
        if @workspace.save! 
            @usersworkspace = UsersWorkspace.new(workspace_id: @workspace.id, user_id: params[:workspace][:user_id])
            if @usersworkspace.save!
                render :show
            else
                render json: @usersworkspace.errors.full_messages, status: 422
            end
        else
            render json: @workspace.errors.full_messages, status: 422
        end
    end

end