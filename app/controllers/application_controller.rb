class ApplicationController < ActionController::Base
    # skip_before_action :verify_authenticiy_token

    helper_method :logged_in?, :current_user

    def current_user
        @current_user = User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in!
        redirect_to new_session_url unless logged_in?
    end

    def logged_in?
        !!current_user
    end  

    def login!(user)
        @current_user = @user
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        if logged_in?
            current_user.reset_session_token! 
            @current_user = nil
            session[:session_token] = nil 
        else
            render json: ['Already logged in!'], status: 401
        end
    end 

    def ensure_logged_out
        # Prevent logged-in users from seeing certain pages
        redirect_to user_url(current_user) if logged_in?
    end
end
