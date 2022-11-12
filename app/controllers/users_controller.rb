class UsersController < ApplicationController
    require 'byebug'

    #Test end point to fetch all Users
    #GET '/all'
    def index 
        user = User.all 
        render json: user
    end
    
    #SignUp Form end point
    #POST '/signup'
    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, except:[:password], status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unauthorized
        end
    end

    #Fecth this on App Page load, if user is OK, render All Posts page, if not, render Log in Page.
    #GET '/me'
    def show 
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user, status: :created
        else
            render json: { error: "Not Authorized" }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :password, :title)
    end

end
