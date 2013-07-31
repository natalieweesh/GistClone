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
    @gist = Gist.new(params[:gist])
    @gist.user_id = current_user.id
    @gist.gist_files.each do |gf|
      gf.gist_id = @gist.id
    end
    @gist.save!
    respond_to do |format|
      format.json { render json: @gist }
    end
  end

end