class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  belongs_to :user
  has_many :favorites

  validates :title, presence: true

  def as_json(options = {})
    super(options.merge(methods: "favorited"))
  end

  def favorited
    self.favorites.pluck(:user_id).include?(self.user_id)
  end
end
