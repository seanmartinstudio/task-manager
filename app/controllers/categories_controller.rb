class CategoriesController < ApplicationController


    #GET '/categories'
    def index 
        category = Category.all 
        render json: category
    end

    #POST '/categories'
    def create 
        category = Category.find_or_create_by(category_params) 
        if category
            render json: category, status: :created
        else
            render json: { errors: category.errors }, status: :unprocessable_entity
        end
    end

    ### Live codeing practice
    def user_categories
        user = User.find_by(username: params[:username])
        categories = user.categories.uniq
        render json: categories
    end

    ### Practice Ben 1/5
    def find_category_number
        parameter = params[:integer]
        parameter = parameter.to_i
        tasks = Task.all
        array = tasks.filter { |task| task.body.split.count < parameter && task.complete == true }
        if array != []
            render json: array
        else
            render json: { errors: ["No tasks are found that meet those requirements."]  }
        end
    end

 




    def category_params
        params.permit(:category_title)
    end


end
