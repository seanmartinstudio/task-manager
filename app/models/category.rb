class Category < ApplicationRecord
    has_many :users, through: :tasks
end
