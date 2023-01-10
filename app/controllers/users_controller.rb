class UsersController < ApplicationController
    require 'byebug'

    #Test end point to fetch all Users
    #GET '/all'
    def index 
        user = User.all 
        render json: user
    end
    
    #SignupForm end point
    #POST '/signup'
    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, except:[:password], status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unauthorized
        end
    end

    #App.js end point on page load to authenticate return user.
    #If response.ok => navigate HomePage.
    #Else => navigate to LoginPage.
    #GET '/me'
    def show 
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :created
        else
            render json: { error: "Not Authorized" }, status: :unauthorized
        end
    end

    ### CODE PRACTICE
    ### Returns all users that have tasks that have a category with that string as the category title
    def search
        category = Category.find_by(params[:category_title])
        user = category.users.distinct.count
        render json: user
    end

     ### Solo practice 1/9
     ### Accept an integer as a param and find all Users who have tasks with less than the integer body word count 
    def user_body_count
        parameter = params[:integer]
        parameter = parameter
        tasks = Task.all
        array = tasks.filter { |task| task.body.split.count < parameter }
        if array != []
            users = array.map { |task| task.user.username }
            users = users.uniq
            render json: users
        else
            render json: {error: ["Not Found"]}
        end
    end

    private

    def user_params
        params.permit(:username, :password, :title)
    end

end
