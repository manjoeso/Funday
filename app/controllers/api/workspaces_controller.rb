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

    end

end