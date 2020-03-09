class AddOrderIdToPartorders < ActiveRecord::Migration[6.0]
  def change
    add_column :partorders, :order_id, :integer   
  end
end
