class OrdersController < ApplicationController
    
    before_action :find_order, only: [:show, :edit, :update, :destroy]
    # skip_before_action :verify_authenticity_token

    def index
        @orders = Order.all
        render json: @orders, include: [:partorders]

    end 

    def show
        render json: @order
    end 
    
    def create
        
        @order = Order.new(order_params)
        if @order.save
            render json: @order
        else 
            render json: {errors: @order.errors.full_messages}
            
        end   
    end 
    
    def update
        # binding.pry
        # @order.update(order_params)
        # render json: @order, stattus: 200 
        if @order.update(order_params)
            render json: @order
        else 
            render json: @order.errors, status: :unprocessable_entity
            # render json: @order
        end   
    end 
    
    def destroy
        # binding.pry
        @order.destroy
        
    end 

    private 

    def order_params
        params.require(:order).permit(:order_date, :station, :user_name)
    end 

    def find_order
        @order = order.find(params[:id])
    end

end
