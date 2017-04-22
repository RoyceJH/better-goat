# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Notebook.destroy_all

100.times do
  Notebook.create({title:Faker::Superhero.power, author_id: 1})
end


User.destroy_all

User.create({username:'guestuser', password:'password'});
user = User.find_by(username:'guestuser')

10.times do
  nb = Notebook.create({title:Faker::Superhero.power, author_id: user.id})
  nb.notes.create({title: Faker::Superhero, body: Faker::Superhero.power, author_id: user.id})
end
