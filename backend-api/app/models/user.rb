class User < ApplicationRecord
	has_one :store
	has_many :user_items
	has_many :items, through: :user_items
end
