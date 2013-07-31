class GistsController < ApplicationController

  def index
    @gists = current_user.gists
    respond_to do |format|
      format.html { render html: @gists }
      format.json { render json: @gists }
    end
  end

  def show
    @gist = Gist.find_by_id_and_user_id(params[:id], current_user.id)

    respond_to do |format|
      format.json { render json: @gist }
    end
  end

  def create
    @gist = Gist.create!(user_id: current_user.id, title: params[:gist][:title])
    respond_to do |format|
      format.json { render json: @gist }
    end
  end

end