class GistsController < ApplicationController

  def index
    @gists = Gist.find_by_user_id(current_user.id)
    respond_to do |format|
      format.html {render html: @gists}
      format.json { render json: @gists }
    end
  end

end