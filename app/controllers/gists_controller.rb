class GistsController < ApplicationController

  def index
    @gists = Gist.find_by_user_id(current_user.id)
    respond_to do |format|
      format.html { render html: @gists }
      format.json { render json: @gists }
    end
  end

  def show
    @gist = Gist.find_by_id_and_user_id(params[:id], current_user.id)
    @favorite = Favorite.find_by_gist_id_and_user_id(params[:id], current_user.id)
    @gist = @gist.to_json(include: :favorites)
    p "IN GISTS CONTROLLER"
    p @gist.to_json(include: :favorites)
    respond_to do |format|
      format.json { render json: @gist }
    end
  end

end