Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:index, :show, :create, :update, :destroy]

    resources :notebooks, only: [:index, :show, :create, :update, :destroy] do
      resources :notes, only: [:index]
    end

  end
end
