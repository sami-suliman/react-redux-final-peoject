class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.datetime :order_date
      t.string :station
      t.string :user_name

      t.timestamps
    end
  end
end
