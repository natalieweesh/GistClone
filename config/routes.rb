SessionsTemplate::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]
  resources :gists do
    resource :favorite, only: [:create, :destroy, :show]
  end
  resources :favorites, only: :index
  resources :gist_files, only: [:new, :create, :destroy]

  root :to => "users#new"
end
