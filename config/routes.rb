Rails.application.routes.draw do
  resources :tasks
  resources :categories
  resources :users
  resources :sessions
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/all', to: 'users#index'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/tasks', to: 'tasks#index'
  patch '/tasks/:id/', to: 'tasks#update'
  delete '/tasks/:id/', to: 'tasks#destroy'
  post '/tasks', to: 'tasks#create'

  get '/categories', to: 'categories#index'

  ###

  Rails.application.routes.draw do
  resources :tasks
  resources :categories
  
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
  end

  #Practice

  #Create a custom route which looks at string and returns all users that have tasks that have a category with that string as the category title. The custom route should be a post route. You can create your own controller action and the action should return all users who have that category title in JSON. Validate this route is working through Postman.

  #Step 1 create custom route with POST
  #Step 2 create controller action 
  #Step 3 controller should query by category title to find associated user and return title as JSON obj
  

  #Route
  #post '/login', to: 'sessions#create'
  post '/category', to: 'users#search'
  
  
end
