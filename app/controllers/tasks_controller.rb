class TasksController < ApplicationController

    # def index 
    #     task = Task.all 
    #     render json: task
    # end

    def index 
        user = User.find_by(username: params[:username])
        if session[:user_id]
            render json: Task.all, status: :created
        else  
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
    end

end
