# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Notebook.destroy_all


User.destroy_all

User.create({username:'guestuser', password:'password'});
user = User.find_by(username:'guestuser')

20.times do
  nb = Notebook.create({title:Faker::Superhero.power, author_id: user.id})
  body = Faker::Superhero.power
  preview = body.slice(0, 130)
  nb.notes.create({title: Faker::Superhero.name, body: body, preview: preview, author_id: user.id})
end

Notebook.create({title: user.username.capitalize + "'s notebook", author_id: user.id, default: true})
