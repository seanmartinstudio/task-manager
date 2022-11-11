class CategoriesController < ApplicationController


    #GET '/categories'
    def index 
        category = Category.all 
        render json: category
    end

    #POST '/categories'
    def create 
        category = Category.create(category_params) 
        render json: category
        if category
            render json: category, status: :created
        else
            render json: { errors: category.errors }, status: :unprocessable_entity
        end
    end

    def category_params
        params.permit(:category_title)
    end


end
