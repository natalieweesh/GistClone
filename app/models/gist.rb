class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id, :gist_files_attributes

  belongs_to :user
  has_many :favorites
  has_many :gist_files, dependent: :destroy, inverse_of: :gist
  accepts_nested_attributes_for :gist_files

  validates :title, presence: true

  def as_json(options = {})
    super(options.merge(methods: "favorited"))
  end

  def favorited
    self.favorites.pluck(:user_id).include?(self.user_id)
  end
end
