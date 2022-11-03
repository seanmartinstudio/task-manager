class TaskSerializer < ActiveModel::Serializer
  attributes :id, :heading, :body, :complete

  # has_one :users
end
