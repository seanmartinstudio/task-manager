class TasksController < ApplicationController
    require 'byebug'

    #READ 
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


    #UPDATE
    # PATCH /tasks/:id
    def update
        task = Task.find_by(id: params[:id])
        if task
        task.update(task_params)
        render json: task
        else
        render json: { error: "Task Not Found" }, status: :not_found
        end
    end

    def task_params
        params.permit(:complete)
    end

end
