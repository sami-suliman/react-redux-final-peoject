class CreatePartorders < ActiveRecord::Migration[6.0]
  def change
    create_table :partorders do |t|
      t.string :part_number
      t.string :part_name
      t.string :part_description
      t.integer :qty
      t.boolean :picked

      t.timestamps
    end
  end
end
