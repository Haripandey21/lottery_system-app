Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"
  get 'openLottery' => 'pages#openLottery'
  get 'applyLottery' => 'pages#applyLottery'
  get 'closeLottery' => 'pages#closeLottery'
end
