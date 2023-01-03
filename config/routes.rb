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
  post '/categories', to: 'categories#create'

  ###

  Rails.application.routes.draw do
  resources :tasks
  resources :categories
  
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
  end

  ###CODING PRACTICE:

  ### Live coding practice
  post '/category', to: 'users#search'

  ### Live coding practice
  post '/findtask', to: 'tasks#search_category'

  ### Live coding practice
  post '/findcategory', to: 'categories#user_categories'

  ### Coding with David
  post '/taskbynumber', to: 'tasks#task_number'

  ### Code practice with Ben 12/13/22
  get 'findtaskbyinteger/:integer', to: 'tasks#task_number_2'

  ### Code Practice Dec 29
  get 'find_category/:string', to: 'tasks#find_category'
  
end
