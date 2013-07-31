class FavoritesController < ApplicationController

  def index
    @favorites = Favorite.find_by_user_id(current_user.id)
    respond_to do |format|
      format.json { render json: @favorites }
    end
  end

  def create
    @favorite = Favorite.create!(user_id: current_user.id, gist_id: params[:gist_id])
    respond_to do |format|
      format.json { render json: @favorite }
    end
  end

  def destroy
    @favorite = Favorite.find_by_user_id_and_gist_id(current_user.id, params[:gist_id])
    @favorite.destroy
    respond_to do |format|
      format.json { render json: @favorite }
    end
  end

end