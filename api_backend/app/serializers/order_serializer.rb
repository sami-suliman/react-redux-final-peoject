class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_date, :station, :user_name
  has_many :parts 
end
