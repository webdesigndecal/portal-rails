Rails.application.routes.draw do
  root to: 'pages#home'
  devise_for :users
  resources :assignments
  resources :lectures

  get '/schedule', to: 'assignments#index'

  namespace :api do
  	resources :lectures, only: [:index]
	resources :assignments
  end
end
