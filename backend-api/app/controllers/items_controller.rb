class ItemsController < ApplicationController

	def index
		if params[:store_id]
			items = Item.find_by(store_id: params[:store_id])
		else
			items = Item.all
		end
		render json: items, include: {store: {only: :name}}
	end

	def create
		item = Item.create(name: params[:name], content: params[:content], price: params[:price], store_id: params[:store_id])
		render json: item, include: :store
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
