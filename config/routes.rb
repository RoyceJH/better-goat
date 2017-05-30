Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:index, :show, :create, :update, :destroy]

    resources :notebooks, only: [:index, :show, :create, :update, :destroy] do
      resources :notes, only: [:index]
    end

    resources :tags, only: [:index, :show, :create, :update, :destroy] do
      resources :notes, only: [:index]
    end

  end
end
