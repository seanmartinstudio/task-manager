class UsersController < ApplicationController
    require 'byebug'

    #Dev Test end point for all Users
    def index 
        user = User.all 
        render json: user
    end
    
    #SignUp Form end point
    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, except:[:password], status: :created
        else
            render json: { errors: user.errors }, status: :unprocessable_entity
        end
    end

    
    #Fecth this on App Page load, if user is OK, render All Posts page, if not, render Log in Page.
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
        params.permit(:username, :password, :password_confirmation, :title)
    end

end
