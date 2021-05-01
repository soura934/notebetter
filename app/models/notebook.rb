class Notebook < ApplicationRecord 
    validates :title, presence:true

    belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

    has_many :notes,
        class_name: :Note,
        primary_key: :id,
        foreign_key: :notebook_id
end