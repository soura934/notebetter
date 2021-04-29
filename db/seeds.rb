# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

    Note.delete_all
    Notebook.delete_all
    User.delete_all


    user = User.create!(
        email: 'email@email.com',
        password: 'password'
    )
    notebook1 = Notebook.create!(
        title: 'Silicon Valley',
        user_id: user.id
    )
    notebook2 = Notebook.create!(
        title: 'Big Bang Theory',
        user_id: user.id
    )
    notebook3 = Notebook.create!(
        title: 'Basketball',
        user_id: user.id
    )
    notebook4 = Notebook.create!(
        title: 'Quotes',
        user_id: user.id
    )

    notes1 = []
    1.upto(2) do |number|
        note = Note.create!(
            title: Faker::TvShows::SiliconValley.character,
            body: Faker::TvShows::SiliconValley.quote,
            user_id: user.id,
            notebook_id: notebook1.id,
        )
        notes1 << note
    end

    notes2 = []
    1.upto(5) do |number|
        note = Note.create!(
            title: Faker::TvShows::BigBangTheory.character,
            body: Faker::TvShows::BigBangTheory.quote,
            user_id: user.id,
            notebook_id: notebook2.id,
        )
        notes2 << note
    end

    notes3 = []
    1.upto(10) do |number|
        note = Note.create!(
            title: Faker::Sports::Basketball.player,
            body: Faker::Sports::Basketball.team,
            user_id: user.id,
            notebook_id: notebook3.id,
        )
        notes3 << note
    end

    notes4 = []
    1.upto(10) do |number|
        note = Note.create!(
            title: Faker::GreekPhilosophers.name,
            body: Faker::GreekPhilosophers.quote,
            user_id: user.id,
            notebook_id: notebook4.id,
        )
        notes4 << note
    end
end