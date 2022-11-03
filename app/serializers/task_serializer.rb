class TaskSerializer < ActiveModel::Serializer
  attributes :id, :heading, :body, :complete

  belongs_to :user
end
