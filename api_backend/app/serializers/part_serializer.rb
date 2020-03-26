class PartSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :part_number, :part_name, :part_description, :qty, :picked
  belongs_to :order
end
