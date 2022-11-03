class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :title

  # has_many :tasks
end
