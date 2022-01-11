class Api::BoardsController < ApplicationController

    def index  
        @workspace = Workspace.find(params[:workspace_id])
    end

    def show 
        @board = Workspace.find(params[:id])
    end

    def create 
        # debugger
        @board = Board.new(title: params[:board][:title], workspace_id: params[:workspace_id])
        if @board.save! 
            render :show
        else
            @board = Board.new(title: 'New Board', workspace_id: params[:workspace_id])
        end
    end

    def destroy 
        @board = Board.find(params[:id])
        if @board.destroy
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def board_params 
        # params.require(:board).permit(:title, :workspace_id)
    end
end