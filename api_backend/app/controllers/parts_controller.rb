class PartsController < ApplicationController
    before_action :find_part, only: [:show, :edit, :update, :destroy]
    # skip_before_action :verify_authenticity_token
    def index
        @parts = Part.all
        render json: @parts
    end 

    def show
        render json: @part
    end 
    
    def create
        @part = Part.new(part_params)
        if @part.save
            render json: @part
        else 
            render json: {errors: @part.errors.full_messages}            
        end
    end 
    
    def update
        if @part.update(part_params)
            render json: @part
        else 
            render json: {errors: @part.errors.full_messages}
            render json: @part
        end
    end 
    
    def destroy
        @part.destroy
    end 

    private 

    def part_params
        params.require(:part).permit(:order_id, :part_number, :part_name, :part_description, :qty, :picked)
    end 

    def find_part
        @part = part.find(params[:id])
    end 

end
