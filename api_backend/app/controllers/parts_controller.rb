class PartsController < ApplicationController
    # before_action :find_part, only: [:show, :edit, :update, :destroy]
    # skip_before_action :verify_authenticity_token
    def index
        # binding.pry
        @parts = Part.all
        render json: @parts
    end 

    def show
        # binding.pry
        @order = Order.find(params[:id])
        @parts = @order.parts

        render json: @parts
    end 
    
    def create
        # binding.pry
        @order = Order.find(params[:order_id])
        @part = Order.parts.create(part_params)
        render json: @part, status: :created
        # @part = Part.new(part_params)
        # if @part.save
        #     render json: @part 
        # else 
        #     render json: {errors: @part.errors.full_messages}            
        # end
    end 
    
    # def update
    #     if @part.update(part_params)
    #         render json: @part
    #     else 
    #         render json: {errors: @part.errors.full_messages}
    #         render json: @part
    #     end
    # end 
    
    # def destroy
    #     @part.destroy
    # end 

    private 

    def part_params
        params.require(:part).permit(:order_id, :part_number, :part_name, :part_description, :qty, :picked)
    end 

    def find_part
        @part = Part.find(params[:id])
    end 

end
