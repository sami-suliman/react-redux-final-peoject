class CreatePartorders < ActiveRecord::Migration[6.0]
  def change
    create_table :partorders do |t|

      t.timestamps
    end
  end
end
