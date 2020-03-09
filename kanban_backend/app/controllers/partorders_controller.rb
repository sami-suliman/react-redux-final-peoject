class PartordersController < ApplicationController
    before_action :find_partorder, only: [:show, :edit, :update, :destroy]
    # skip_before_action :verify_authenticity_token
    def index
        @partorders = Partorder.all
        render json: @partorders
    end 

    def show
        render json: @partorder
    end 
    
    def create
        @partorder = Partorder.new(partorder_params)
        if @partorder.save
            render json: @partorder
        else 
            render json: {errors: @partorder.errors.full_messages}            
        end
    end 
    
    def update
        if @partorder.update(partorder_params)
            render json: @partorder
        else 
            render json: {errors: @partorder.errors.full_messages}
            render json: @partorder
        end
    end 
    
    def destroy
        @partorder.destroy
    end 

    private 

    def partorder_params
        params.require(:partorder).permit(:order_id, :part_number, :part_name, :part_description, :qty, :picked)
    end 

    def find_partorder
        @partorder = partorder.find(params[:id])
    end 

end
