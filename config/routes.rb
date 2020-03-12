# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resource :user, only: %i[create show]
    resource :session, only: %i[create destroy show]
    resources :documents, only: %i[index show create update destroy]
    resources :books, only: %i[show index]
    resources :reviews, only: [:create, :show]
  end

  root 'static_pages#root'
end
