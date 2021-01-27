class Note < ApplicationRecord
    validates :user_id, :notebook_id, :title, presence:true

    belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id


end
