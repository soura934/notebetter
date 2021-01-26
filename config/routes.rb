Rails.application.routes.draw do
  get 'notes/new'
  get 'notes/create'
  get 'notes/update'
  get 'notes/destroy'
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
end
