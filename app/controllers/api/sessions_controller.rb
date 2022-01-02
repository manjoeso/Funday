class Api::SessionsController < ApplicationController

    # before_action :ensure_logged_in!, only: [:destroy]
    def new
        render :new
    end
    
    def create 
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user 
            login!(@user)
            render '/api/users/show'; # different
        else
            render json: ['Wrong credentials'], status: 401
        end
    end

    def destroy 
        logout!
        render json: {}
    end

end