class TasksController < ApplicationController
    require 'byebug'

    #AllTasksPage end point
    #GET '/tasks'
    def index 
        user = User.find_by(id: session[:user_id])
            if user
            user_id = user.id
            tasks = Task.where(user_id: user_id)
            if tasks
                render json: tasks
            else
                render json: []
            end
        else
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
    end

    #TaskContainer end point (complete or incomplete boolean)
    #PATCH '/tasks/:id'
    def update
        user = User.find_by(id: session[:user_id])
        if user
            user_id = user.id
            task = Task.find_by(id: params[:id])
            if task.user_id == user_id
                task.update(update_task_params)
                render json: task
            else
                render json: { error: ["Not Found"] }, status: :not_found
            end
        else
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        end
    end

    #TaskContainer end point
    #DELETE '/tasks/:id'
    def destroy 
        user = User.find_by(id: session[:user_id])
        if user
            user_id = user.id
            task = Task.find_by(id: params[:id])
            if task.user_id == user_id 
                task.destroy
                head :no_content
            else
                render json: { error: ["Not Found"] }, status: :not_found
            end
        else
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
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


    

        ### CODE PRACTICE
        def search_category
            category = Category.find_by(category_title: params[:category_title])
            tasks = category.tasks
            render json: tasks
        end
    
        ## CODE PRACTICE
        ## TASK: "Create a route that lets us search for a task that has a certain number of words"
        def task_number_2 
            #Grab the value of the parameter and convert to int
            parameter = params[:integer]
            parameter = parameter.to_i
            #Line up all tasks
            tasks = Task.all
            #Iterate through each task, as the question "Does the body have 'params' amount of words in the string?"
            correct_task = tasks.find { |task| task.body.split.count == parameter }
            #Return obj as JSON
            render json: correct_task
        end

    private

    def update_task_params
        params.permit(:complete)
    end

    def create_task_params
        params.permit(:heading, :body, :complete, :category_id)
    end

end
