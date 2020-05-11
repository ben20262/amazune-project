class Item < ApplicationRecord
	belongs_to :store
	has_many :user_items
	has_many :users, through: :user_items
end
