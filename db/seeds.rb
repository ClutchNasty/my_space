/destroy.all/
10.times do
 name = Faker::Artist.name
 avatar = Faker::Avatar.image(slug: name, size: "100x400", format: "png", set: "set1")
 Friend.create(name: name, avatar: avatar)
end
puts "10 Friends Seeded"