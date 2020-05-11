class ItemsController < ApplicationController

	def index
		items = Item.all
		render json: items, include: :store
	end

	def show
		item = Item.find_by(id: params[:id])
	end

	def destroy
		item = Item.find_by(id: params[:id])
		if item
			Item.destory(item)
			render json: {type: 'SUCCESS'}
		else
			render json: {type: 'FAILURE'}
		end
	end
end
