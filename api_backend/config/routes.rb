Rails.application.routes.draw do
  # resources :orders do
  #   resources :parts
  # end

  # resources :parts, only: [:index, :show, :new, :edit]
  get '/orders/:id/parts', to: 'parts#show'
  resources :orders do
    resources :parts, only: [ :create, :edit]
  end
  
  resources :parts
  resources :orders

  # get '/picked', to: 'parts#picked'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
