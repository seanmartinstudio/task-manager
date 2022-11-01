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

  # post '/login', to: 'sessions#create'
  # delete '/logout', to: 'sessions#destroy'

  Rails.application.routes.draw do
  resources :tasks
  resources :categories
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
  end
end
