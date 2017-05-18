# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Notebook.destroy_all
User.destroy_all
Tag.destroy_all

User.create({username:'guestuser', password:'password'});
user = User.find_by(username:'guestuser')


tag = Tag.create({author_id: user.id, title: 'news'})
tag1 = Tag.create({author_id: user.id, title: 'wow'})
tag2 = Tag.create({author_id: user.id, title: 'super'})
tag3 = Tag.create({author_id: user.id, title: 'list'})
tag4 = Tag.create({author_id: user.id, title: 'urgent'})
tag5 = Tag.create({author_id: user.id, title: 'info'})
tag6 = Tag.create({author_id: user.id, title: 'ruby'})
tag7 = Tag.create({author_id: user.id, title: 'plan'})

nb = Notebook.create({title: 'Snippets', author_id: user.id})

note_news = nb.notes.create({title:"Mr Tiger Shark", body:  "<p><strong style=\"font-size: large;\">Video footage has emerged of a spearfisherman patting a wild tiger shark that swam beneath him at a reef near Darwin.</strong></p><p>Darwin man Rick Trippe filmed his encounter with the two-metre tiger shark at Bass Reef, about 55 kilometres east of Darwin on Tuesday.</p><p>Mr Trippe said he had dived down to film a trout and when he was coming back up he saw the shark.</p><p><br></p><p>\"I couldn't make out what it was at first. What species of shark,\" Mr Trippe told 105.7 ABC Darwin.</p><p>\"As it came in close I realised it was a tiger shark,\" he said.</p><p>The video footage shows that after spotting the shark Mr Trippe touches the animal's tail and then when the animal swims back, pats it along its back.</p><p><br></p><p>He said that while he was a \"tad concerned\" at times, the shark did not look aggressive.</p><p>\"Aggressive mode is when their backs are arched and their fins are out and they look very cranky and it's [time to] get out of the water straight away,\" he said.</p><p>The federal Department of Environment lists tiger sharks as dangerous to humans but said most shark attacks on people could be attributed to the sharks confusing people with their normal prey.</p><p>Mr Trippe said the shark was a stunning creature.</p><p><br></p><p>\"I wouldn't get in the water if I thought it was dangerous. Like I think crossing the road is dangerous,\" he said.</p>",
  preview: "Video footage has emerged of a spearfisherman patting a wild tiger shark that swam beneath him at a reef near Darwin.\nDarwin man R", author_id: user.id})
note_news.tag_ids = [tag.id, tag5.id, tag1.id]

note_cast = nb.notes.create({title:'Castings', body:
"<ul><li><a href=\"http://www.imdb.com/name/nm0000434/?ref_=ttfc_fc_cl_i1\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3Njc5ODc4OV5BMl5BanBnXkFtZTYwNjY5MTU0._V1_UX32_CR0,0,32,44_AL_.jpg\" alt=\"Mark Hamill\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0000434/?ref_=ttfc_fc_cl_t1\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Mark Hamill</a>...<a href=\"http://www.imdb.com/character/ch0000273/?ref_=ttfc_fc_cl_t1\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Luke Skywalker</a></li><li><a href=\"http://www.imdb.com/name/nm0000148/?ref_=ttfc_fc_cl_i2\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_UX32_CR0,0,32,44_AL_.jpg\" alt=\"Harrison Ford\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0000148/?ref_=ttfc_fc_cl_t2\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Harrison Ford</a>...<a href=\"http://www.imdb.com/character/ch0000002/?ref_=ttfc_fc_cl_t2\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Han Solo</a></li><li><a href=\"http://www.imdb.com/name/nm0000402/?ref_=ttfc_fc_cl_i3\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4ODU5MDY4MV5BMl5BanBnXkFtZTgwODY1MjQ5MDI@._V1_UX32_CR0,0,32,44_AL_.jpg\" alt=\"Carrie Fisher\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0000402/?ref_=ttfc_fc_cl_t3\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Carrie Fisher</a>...<a href=\"http://www.imdb.com/character/ch0000008/?ref_=ttfc_fc_cl_t3\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Princess Leia Organa</a></li><li><a href=\"http://www.imdb.com/name/nm0001088/?ref_=ttfc_fc_cl_i4\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BNTM4NzE4NTIwNl5BMl5BanBnXkFtZTYwMTYxNzM2._V1_UX32_CR0,0,32,44_AL_.jpg\" alt=\"Peter Cushing\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0001088/?ref_=ttfc_fc_cl_t4\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Peter Cushing</a>...<a href=\"http://www.imdb.com/character/ch0000030/?ref_=ttfc_fc_cl_t4\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Grand Moff Tarkin</a></li><li><a href=\"http://www.imdb.com/name/nm0000027/?ref_=ttfc_fc_cl_i5\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIxMTA5OTI2M15BMl5BanBnXkFtZTYwNjEwNjU2._V1_UY44_CR1,0,32,44_AL_.jpg\" alt=\"Alec Guinness\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0000027/?ref_=ttfc_fc_cl_t5\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Alec Guinness</a>...<a href=\"http://www.imdb.com/character/ch0000004/?ref_=ttfc_fc_cl_t5\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Ben Obi-Wan Kenobi</a></li><li><a href=\"http://www.imdb.com/name/nm0000355/?ref_=ttfc_fc_cl_i6\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3MzU2NTUxMF5BMl5BanBnXkFtZTcwMTE1NjI4NA@@._V1_UY44_CR0,0,32,44_AL_.jpg\" alt=\"Anthony Daniels\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0000355/?ref_=ttfc_fc_cl_t6\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Anthony Daniels</a>...<a href=\"http://www.imdb.com/character/ch0000048/?ref_=ttfc_fc_cl_t6\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">C-3PO</a></li><li><a href=\"http://www.imdb.com/name/nm0048652/?ref_=ttfc_fc_cl_i7\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1OTA3MzU0NV5BMl5BanBnXkFtZTcwNjY2Njk4Nw@@._V1_UX32_CR0,0,32,44_AL_.jpg\" alt=\"Kenny Baker\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0048652/?ref_=ttfc_fc_cl_t7\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Kenny Baker</a>...<a href=\"http://www.imdb.com/character/ch0000054/?ref_=ttfc_fc_cl_t7\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">R2-D2</a></li><li><a href=\"http://www.imdb.com/name/nm0562679/?ref_=ttfc_fc_cl_i8\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BNjg1NDUzMzM3NF5BMl5BanBnXkFtZTcwMDg4NTczMQ@@._V1_UY44_CR1,0,32,44_AL_.jpg\" alt=\"Peter Mayhew\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0562679/?ref_=ttfc_fc_cl_t8\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Peter Mayhew</a>...<a href=\"http://www.imdb.com/character/ch0000033/?ref_=ttfc_fc_cl_t8\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Chewbacca</a></li><li><a href=\"http://www.imdb.com/name/nm0001190/?ref_=ttfc_fc_cl_i9\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTEyODc0MTUzODBeQTJeQWpwZ15BbWU4MDUyMjc3OTAx._V1_UX32_CR0,0,32,44_AL_.jpg\" alt=\"David Prowse\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0001190/?ref_=ttfc_fc_cl_t9\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">David Prowse</a>...<a href=\"http://www.imdb.com/character/ch0000005/?ref_=ttfc_fc_cl_t9\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Darth Vader</a></li><li><a href=\"http://www.imdb.com/name/nm0114436/?ref_=ttfc_fc_cl_i10\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMDkxYTdkZjUtNDM4ZS00YTM3LWI2MzktODM1MTlhYjJkZjI5XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_UY44_CR23,0,32,44_AL_.jpg\" alt=\"Phil Brown\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0114436/?ref_=ttfc_fc_cl_t10\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Phil Brown</a>...<a href=\"http://www.imdb.com/character/ch0000037/?ref_=ttfc_fc_cl_t10\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Uncle Owen</a></li><li><a href=\"http://www.imdb.com/name/nm0292235/?ref_=ttfc_fc_cl_i11\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BNjVjMTVkZWItZDIyMy00ZDM4LTlhMWQtNWM4NTg4MDY3MjBmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_UY44_CR23,0,32,44_AL_.jpg\" alt=\"Shelagh Fraser\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0292235/?ref_=ttfc_fc_cl_t11\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Shelagh Fraser</a>...<a href=\"http://www.imdb.com/character/ch0000093/?ref_=ttfc_fc_cl_t11\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Aunt Beru</a></li><li><a href=\"http://www.imdb.com/name/nm0701023/?ref_=ttfc_fc_cl_i12\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3OTkwNjk0NF5BMl5BanBnXkFtZTcwNjQzNTk0OA@@._V1_UX32_CR0,0,32,44_AL_.jpg\" alt=\"Jack Purvis\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0701023/?ref_=ttfc_fc_cl_t12\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Jack Purvis</a>...<a href=\"http://www.imdb.com/character/ch0049629/?ref_=ttfc_fc_cl_t12\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Chief Jawa</a></li><li><a href=\"http://www.imdb.com/name/nm0567018/?ref_=ttfc_fc_cl_i13\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTVlNWNhZjEtOTA4Ny00MjZjLWFhNjUtZDQxNDY5ZDU2ODFjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_UY44_CR4,0,32,44_AL_.jpg\" alt=\"Alex McCrindle\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0567018/?ref_=ttfc_fc_cl_t13\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Alex McCrindle</a>...<a href=\"http://www.imdb.com/character/ch0000108/?ref_=ttfc_fc_cl_t13\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">General Dodonna</a></li><li><a href=\"http://www.imdb.com/name/nm0125952/?ref_=ttfc_fc_cl_i14\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\"><img src=\"https://images-na.ssl-images-amazon.com/images/M/MV5BMGIyZjcxMDUtMjdhNy00NTkxLWE2OTEtMDZmNjAwZjZjNjYzXkEyXkFqcGdeQXVyNTEzNDY5MjM@._V1_UX32_CR0,0,32,44_AL_.jpg\" alt=\"Eddie Byrne\" height=\"44\" width=\"32\"></a><a href=\"http://www.imdb.com/name/nm0125952/?ref_=ttfc_fc_cl_t14\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">Eddie Byrne</a>...<a href=\"http://www.imdb.com/character/ch0000105/?ref_=ttfc_fc_cl_t14\" target=\"_blank\" style=\"color: rgb(112, 87, 157);\">General Willard</a></li></ul>",
  preview: "Mark Hamill...Luke Skywalker\nHarrison Ford...Han Solo\nCarrie Fisher...Princess Leia Organa\nPeter Cushing...Grand Moff Tarkin\nAlec", author_id: user.id })
note_cast.tag_ids = [tag3.id, tag2.id, tag1.id]


note_xmen = nb.notes.create({title:'Xmen', body: "<ol><li>Professor X</li><li>Cyclops</li><li>Iceman</li><li>Angel/Archangel</li><li>Beast</li><li>Marvel Girl / Phoenix</li><li>Havoc</li><li>Vulcan</li><li>Nightcrawler</li><li>Wolverine</li><li>Banshee</li><li>Storm</li><li>Sunfire</li><li>Colossus</li><li>Thunderbird</li></ol>",
preview: "Professor X\nCyclops\nIceman\nAngel/Archangel\nBeast\nMarvel Girl / Phoenix\nHavoc\nVulcan\nNightcrawler\nWolverine\nBanshee\nStorm\nSunfire\nC",
author_id: user.id})
note_xmen.tag_ids = [tag3.id, tag2.id]


n2= Notebook.create({title:'Programming', author_id: user.id})

note_code = n2.notes.create({title:"Merge Sort", body: "<pre class=\"ql-syntax\" spellcheck=\"false\">class Array  \n  def merge_sort    \n    return self if count &lt; 2\n\n    middle = count / 2\n    left, right = self.take(middle), self.drop(middle)    \n    sorted_left, sorted_right = left.merge_sort, right.merge_sort\n\n    merge(sorted_left, sorted_right)  \n  end\n\n  def merge(left, right)    \n    merged_array = []    \n    until left.empty? || right.empty?      \n      merged_array &lt;&lt;        \n        ((left.first &lt; right.first) ? left.shift : right.shift)    \n    end\n\n    merged_array + left + right  \n  end\nend\n</pre>", author_id: user.id, preview: "class Array  \n  def merge_sort    \n    return self if count < 2\n\n    middle = count / 2\n    left, right = self.take(middle), self."})
note_code.tag_ids = [tag6.id]

note_code2 = n2.notes.create({ title: "Enumerables Solution",
 body:  "<p><span style=\"color: rgb(167, 29, 93);\">class</span> <span style=\"color: rgb(121, 93, 163);\">Array</span></p><p><span style=\"color: rgb(167, 29, 93);\">\tdef</span> <span style=\"color: rgb(121, 93, 163);\">my_each</span>(<span style=\"color: rgb(167, 29, 93);\">&amp;</span><span style=\"color: rgb(51, 51, 51);\">prc</span>)</p><p><span style=\"color: rgb(0, 134, 179);\"> self</span>.length.times <span style=\"color: rgb(167, 29, 93);\">do </span>|<span style=\"color: rgb(51, 51, 51);\">i</span>|</p><p>prc.call(<span style=\"color: rgb(0, 134, 179);\">self</span>[i])</p><p><span style=\"color: rgb(167, 29, 93);\"> end</span></p><p><br></p><p><span style=\"color: rgb(0, 134, 179);\">\tself</span></p><p><span style=\"color: rgb(167, 29, 93);\">\tend</span></p><p><br></p><p><span style=\"color: rgb(167, 29, 93);\">\tdef</span> <span style=\"color: rgb(121, 93, 163);\">my_select</span>(<span style=\"color: rgb(167, 29, 93);\">&amp;</span><span style=\"color: rgb(51, 51, 51);\">prc</span>)</p><p>selects <span style=\"color: rgb(167, 29, 93);\">=</span> []</p><p><br></p><p><span style=\"color: rgb(0, 134, 179);\">\tself</span>.my_each <span style=\"color: rgb(167, 29, 93);\">do </span>|<span style=\"color: rgb(51, 51, 51);\">item</span>|</p><p>selects <span style=\"color: rgb(167, 29, 93);\">&lt;&lt;</span> item <span style=\"color: rgb(167, 29, 93);\">if</span> prc.call(item)</p><p><span style=\"color: rgb(167, 29, 93);\"> end</span></p><p><br></p><p>selects</p><p><span style=\"color: rgb(167, 29, 93);\">\tend</span></p><p><span style=\"font-family: Helvetica, Arial, sans-serif; font-size: 13px; background-color: rgb(255, 255, 255); color: rgb(167, 29, 93);\"><U+FEFF>end</span></p>",
  preview: "class Array\n\tdef my_each(&prc)\n self.length.times do |i|\nprc.call(self[i])\n end\n\n\tself\n\tend\n\n\tdef my_select(&prc)\nselects = []\n\n\t",
  author_id: user.id})

note_code2.tag_ids = [tag6.id]

Notebook.create({title: user.username.capitalize + "'s notebook", author_id: user.id, default: true})

n3 = Notebook.create({title: "Superheroes", author_id: user.id})

5.times do
  body = "Abilities " + Faker::Superhero.descriptor + "\n" + Faker::Superhero.power + "\n" + Faker::Superhero.prefix + "\n" + Faker::Superhero.suffix
  5.times do
    body += "\n" + Faker::Superhero.descriptor
  end
  preview = body.slice(0,130)
  note1 = n3.notes.create({title: Faker::Superhero.name, body:body, preview: preview, author_id: user.id})
  note1.tag_ids =[ tag2.id]
end

n4 = Notebook.create({title: 'Spain Vacation', author_id: user.id})

note_list = n4.notes.create( {
  title: 'Things to Pack',
  body:
  "<ol><li>Passport/visa(s)</li><li>Personal ID, including a student ID card if you have one</li><li>Frequent flyer card(s) and other loyalty program cards such as a hotel or hostel</li><li>Cash and credit card(s)</li><li>Health insurance cards/document(s)</li><li>Travel insurance info</li><li>Reservations and itineraries</li><li>Hotel and/or tour contact information</li><li>Transportation tickets (plane, train, bus, car, etc.)</li><li>Emergency contacts and important addresses</li><li>Books</li><li> Phone charger</li><li> Laptop</li></ol>",
 preview: "Passport/visa(s)\nPersonal ID, including a student ID card if you have one\nFrequent flyer card(s) and other loyalty program cards s",
 author_id: user.id});

note_day1 = n4.notes.create({
  title: "Days 1 & 2: Madrid",
body:
 "<p>Take a flight that arrives in Madrid as early as possible. Check into your hotel and hit the nearest cafe for a pick-me-up cafe au lait and croissant before sightseeing. Take the Metro to Atocha or Banco de España to begin your tour of the&nbsp;<strong style=\"font-size: 15px;\">Museo del Prado</strong>, allowing at least 2 hours for a brief visit. Since you can't see it all, concentrate on the splendid array of works by Velázquez, and take in some of the works of Francisco de Goya, including his&nbsp;<em style=\"font-family: inherit;\">Clothed Maja</em>&nbsp;and&nbsp;<em style=\"font-family: inherit;\">Naked Maja.</em></p><p>Break for lunch at&nbsp;<strong style=\"font-size: 15px;\">Plaza de Santa Ana,</strong>&nbsp;known for its outdoor&nbsp;<em style=\"font-family: inherit;\">terrazas.</em>&nbsp;This was the center of an old neighborhood for literati, attracting such Golden Age authors as Lope de Vega and Cervantes. Hemingway drank here in the 1920s.</p><p>After lunch, walk west to&nbsp;<strong style=\"font-size: 15px;\">Puerta del Sol,</strong>&nbsp;the very center of Madrid. This is the Times Square of Madrid. Northwest of the square you can visit&nbsp;<strong style=\"font-size: 15px;\">Monasterio de las Descalzas Reales</strong>, Madrid's art-filled convent from the mid-16th century and a true treasure trove.</p><p>After perhaps a siesta at your hotel, head for&nbsp;<strong style=\"font-size: 15px;\">Plaza Mayor</strong>, Madrid's most beautiful square and liveliest hub in the early evening. For dinner, patronize Hemingway's favorite restaurant,&nbsp;<strong style=\"font-size: 15px;\">Sobrino de Botín</strong>.</p>",
preview: "Take a flight that arrives in Madrid as early as possible. Check into your hotel and hit the nearest cafe for a pick-me-up cafe au",
author_id: user.id
  })

note_day1.tag_ids = [tag7.id]

note_day2 = n4.notes.create({
  title: "Day 3: Day Trip to Toledo",
body:
 "<p>Having survived 2 days in the capital of Spain, bid&nbsp;<em style=\"font-family: inherit;\">adios</em>&nbsp;and take a RENFE train to Toledo. These depart frequently from Madrid's Atocha station (trip time: 30 min.).</p><p>Much of Spain's history took place behind Toledo's old walls. There is so much to see here that you need 2 days, but on a hurried visit you can visit the fortified palace, the&nbsp;<strong style=\"font-size: 15px;\">Alcázar,</strong>&nbsp;with its army museum; and the crowning glory of the city, the&nbsp;<strong style=\"font-size: 15px;\">Catedral de Toledo</strong>. The masterpiece of El Greco,&nbsp;<em style=\"font-family: inherit;\">The Burial of the Count of Orgaz,</em>&nbsp;rests in&nbsp;<strong style=\"font-size: 15px;\">Iglesia de Santo Tomé</strong>. If time remains, see&nbsp;<strong style=\"font-size: 15px;\">Casa y Museo de El Greco</strong>, or the House and Museum of El Greco, although the artist didn't actually live here. Toledo is known for its damascene work, so pick up a souvenir before returning to Madrid by train that night.</p>",
preview: "Having survived 2 days in the capital of Spain, bid adios and take a RENFE train to Toledo. These depart frequently from Madrid's ",
author_id: user.id
  })

note_day2.tag_ids = [tag7.id, tag1.id]

note_list.tag_ids = [tag1.id, tag3.id, tag4.id]

note_list2 = n4.notes.create({
  title: "About Spain",
body:
 "<p><span style=\"background-color: rgb(255, 255, 255); font-size: 13px; font-family: Roboto, arial, sans-serif; color: rgb(34, 34, 34);\">Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church.</span></p><p><br></p><p><strong style=\"color: rgb(26, 13, 171);\">Capital</strong><strong>:&nbsp;</strong><span style=\"color: rgb(26, 13, 171);\">Madrid</span></p><p><strong style=\"color: rgb(26, 13, 171);\">Dialing code</strong><strong>:&nbsp;</strong>+34</p><p><strong style=\"color: rgb(26, 13, 171);\">Population</strong><strong>:&nbsp;</strong>46.56&nbsp;million (2016)&nbsp;<a href=\"http://www.ine.es/en/wel/faq_en.htm#3\" target=\"_blank\" style=\"font-size: 11px; color: rgb(119, 119, 119);\">Instituto Nacional de Estadística</a></p><p><strong style=\"color: rgb(26, 13, 171);\">Currency</strong><strong>:&nbsp;</strong>Euro</p><p><strong style=\"color: rgb(26, 13, 171);\">King</strong><strong>:&nbsp;</strong><span style=\"color: rgb(26, 13, 171);\">Felipe VI of Spain</span></p><p><strong style=\"color: rgb(26, 13, 171);\">Official language</strong><strong>:&nbsp;</strong>Spanish</p><p><br></p><p>More information: https://en.wikipedia.org/wiki/Spain</p>",
preview: "Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city M",
author_id: user.id,
  })

note_list2.tag_ids = [tag5.id]
