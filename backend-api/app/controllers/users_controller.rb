class UsersController < ApplicationController
	def create
		user = User.create(name: params[:name])
		render json: user
	end

	def index
		users = User.all
		render json: users
	end

	def show
		user = User.find_by(id: params[:id])
		render json: user, include: :items
	end

	def update
		user = User.find_by(id: params[:id])
		item = Item.find_by(id: params[:itemId])

		user.items << item if !user.items.include?(item)
		render json: user, include: :items
			
	end

end