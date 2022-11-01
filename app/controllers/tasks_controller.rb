class TasksController < ApplicationController

    def index 
        user = Task.all 
        render json: user
    end

end
