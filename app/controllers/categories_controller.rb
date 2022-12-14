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

    def category_params
        params.permit(:category_title)
    end


end
