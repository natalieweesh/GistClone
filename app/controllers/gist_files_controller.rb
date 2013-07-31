class GistFilesController < ApplicationController
  def create
    @gist_file = GistFile.create!(params[:gist_file])
    respond_to do |format|
      format.json { render json: @gist_file }
    end
  end
end