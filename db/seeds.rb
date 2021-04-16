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
    notebook = Notebook.create!(
        title: 'Notebook1',
        user_id: user.id
    )
    notes = []
    1.upto(10) do |number|
        note = Note.create!(
            title: Faker::Superhero.name,
            body: Faker::GreekPhilosophers.quote,
            user_id: user.id,
            notebook_id: notebook.id,
        )
        notes << note
    end

end