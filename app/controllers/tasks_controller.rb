class TasksController < ApplicationController
    require 'byebug'

    #Read
    # def index 
    #     task = Task.all 
    #     render json: task
    # end

    def index 
        user = User.find_by(id: session[:user_id])
        userid = user.id
        tasks = Task.where(user_id: userid)
        if tasks
            render json: tasks
        else
            render json: []
        end
    end

        # task = Task.find_by(id: session[:user_id])
        # render json: user_id
        # render json: user
        #task = task foud by user
        #if task == user
        #return task
        # task = Task.all 
        # render json: task
    # end

    # def show 
    #     user = User.find_by(id: session[:user_id])
    #     if user 
    #         render json: user, status: :created
    #     else
    #         render json: { error: "Not Authorized" }, status: :unauthorized
    #     end
    # end

    #Update


#     def index 
#         user = User.find_by(username: params[:username])
#         if session[:user_id]
#             render json: Task.all, status: :created
#         else  
#             render json: { errors: ["Not Authorized"] }, status: :unauthorized
#         end
#     end

end
