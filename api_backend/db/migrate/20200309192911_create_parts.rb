class CreateParts < ActiveRecord::Migration[6.0]
  def change
    create_table :parts do |t|
      t.integer :order_id
      t.string :part_number
      t.string :part_name
      t.string :part_description
      t.integer :qty
      t.boolean :picked

      t.timestamps
    end
  end
end
