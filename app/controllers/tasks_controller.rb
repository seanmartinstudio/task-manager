class TasksController < ApplicationController
    require 'byebug'

    #AllTasksPage end point
    #GET '/tasks'
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

    #TaskContainer end point (complete or incomplete boolean)
    #PATCH '/tasks/:id'
    def update
        user = User.find_by(id: session[:user_id])
        user_id = user.id
        task = Task.find_by(id: params[:id])
        if task.user_id == user_id
            task.update(update_task_params)
            render json: task
        else
            render json: { error: "Task Not Found" }, status: :not_found
        end
    end

    #TaskContainer end point
    #DELETE '/tasks/:id'
    def destroy 
        user = User.find_by(id: session[:user_id])
        user_id = user.id
        task = Task.find_by(id: params[:id])
        if task 
            task.destroy
            head :no_content
        else
            render json: { error: "Task not found" }, status: :not_found
        end
    end

    #NewTaskpage end point
    #POST '/tasks'
    def create 
        user = User.find_by(id: session[:user_id])
        if user
            task = user.tasks.create(create_task_params)
            render json: task, status: :created
        else
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
    end

    private
    
    def update_task_params
        params.permit(:complete)
    end

    def create_task_params
        params.permit(:heading, :body, :complete, :category_id)
    end

end
