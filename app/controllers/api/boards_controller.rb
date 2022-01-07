class Api::BoardsController < ApplicationController

    def index  
        @workspace = Workspace.find(params[:workspace_id])
    end

end