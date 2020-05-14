Rails.application.routes.draw do
  resources :users, only: [:create, :index, :show, :update]
  resources :items, only: [:index, :create, :destroy]
  resources :stores, only: [:index, :show, :create, :update, :destroy]

  resources :stores, only: [:show] do
	resources :items, only: [:index, :create]
  end
end
