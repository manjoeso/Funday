class Api::WorkspacesController < ApplicationController

    def index
        @user = User.find(params[:user_id]) 
        render :index
        # workspaces will be handled in jbuilder? Should I do it here?
    end
    
    def edit
        
    end
    
    def show
        
    end
    
    def create 

    end

end