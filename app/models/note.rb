class Note < ApplicationRecord
    validates :title, presence:true

    belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

    belongs_to :notebook,
        class_name: :Notebook,
        primary_key: :id,
        foreign_key: :notebook_id
end
