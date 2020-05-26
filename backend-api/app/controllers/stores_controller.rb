class StoresController < ApplicationController

	def index
		stores = Store.all
		render json: stores
	end

	def show
		store = Store.find_by(id: params[:id])
		render json: store, include: :items
	end

	def create
		store = Store.create(name: params[:name], content: params[:content], user_id: params[:user_id])
		render json: store
	end

	def update
		item = Item.create(name: params[:name], content: params[:content], image: params[:image])
		render json: {type: 'SUCCESS'}
	end

	def destroy
		store = Store.find_by(id: params[:id])
		if store
			Store.destroy(params[:id])
			render json: {type: 'SUCCESS'}
		else
			render json: {type: 'FAILURE'}
		end
	end

end
