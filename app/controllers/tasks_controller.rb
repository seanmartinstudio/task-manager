class TasksController < ApplicationController
    require 'byebug'

    #READ 
    #Patch 'tasks#index'
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
    #Patch '/tasks/:id'
    def update
        task = Task.find_by(id: params[:id])
        if task
            task.update(update_task_params)
            render json: task
        else
            render json: { error: "Task Not Found" }, status: :not_found
        end
    end


    #DELETE /plants/:id
    def destroy 
        task = Task.find_by(id: params[:id])
        if task 
            task.destroy
            head :no_content
        else
            render json: { error: "Task not found" }, status: :not_found
        end
    end

    def create 
        user = User.find_by(id: session[:user_id])
        byebug
        if user
            
            task = user.tasks.create(create_task_params)
            render json: task, status: :created
        else
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
    end

    def update_task_params
        params.permit(:complete)
    end

    def create_task_params
        params.permit(:heading, :body, :complete, :category_title)
    end

end
