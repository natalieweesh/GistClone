class GistFile < ActiveRecord::Base
  attr_accessible :body, :gist_id, :name

  belongs_to :gist, inverse_of: :gist_files

  validates :body, :name, presence: true
end
