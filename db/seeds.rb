require 'open-uri'

User.destroy_all
Document.destroy_all
Book.destroy_all
Review.destroy_all
Save.destroy_all

user1 = User.create!(
  email: 'user1@gmail.com', 
  full_name: 'User One', 
  password: 'abcd1234'
)

user2 = User.create!(
  email: 'user1df@gmail.com', 
  full_name: 'Jane Dow', 
  password: 'abdfcd1234'
)

demo_user = User.create!(
  email: 'demo@demo.demo', 
  full_name: 'Demo User', 
  password: 'demopassword'
)

# doc1 = Document.create!(title: 'Catch and Kill', description: 'Both a spy thriller and a meticulous work of investigative journalism, Catch and Kill breaks devastating new stories about the rampant abuse of power and sheds far-reaching light on investigations that shook our culture.', user_id: user1.id, thumbnail_url: '', document_url: '', format: 'pdf', private: false)

sapiens_book = Book.create!(
  title: 'Sapiens', 
  author: 'Yuval Noah Harari', 
  description: "100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. 

  How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come? 

  In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come? 

  Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.", 
  cover_url: 'https://images-na.ssl-images-amazon.com/images/I/51Sn8PEXwcL.jpg', publisher: 'Harper Collins', 
  pages: 631,
  isbn: "9780062316103",
  release_date: "2015-02-10"
)

Save.create!(item_id: sapiens_book.id, user_id: demo_user.id, item_type: "Book")


trick_book = Book.create!(
  title: 'Trick Mirror: Reflections on Self-Delusion', 
  author: 'Jia Tolentino', 
  description: "Trick Mirror is an enlightening, unforgettable trip through the river of self-delusion that surges just beneath the surface of our lives. This is a book about the incentives that shape us, and about how hard it is to see ourselves clearly in a culture that revolves around the self. In each essay, Jia writes about the cultural prisms that have shaped her: the rise of the nightmare social internet; the American scammer as millennial hero; the literary heroine’s journey from brave to blank to bitter; the mandate that everything, including our bodies, should always be getting more efficient and beautiful until we die.", 
  cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544069605l/43126457.jpg', publisher: 'Harper Collins', 
  pages: 303,
  isbn: "0525510540",
  release_date: "2019-09-10"
)

Save.create!(user_id: demo_user.id, item_id: trick_book.id, item_type: "Book")

rest = Book.create!(
  title: 'My Year of Rest and Relaxation', 
  author: 'Ottessa Moshfegh', 
  description: "Our narrator should be happy, shouldn't she? She's young, thin, pretty, a recent Columbia graduate, works an easy job at a hip art gallery, lives in an apartment on the Upper East Side of Manhattan paid for, like the rest of her needs, by her inheritance. But there is a dark and vacuous hole in her heart, and it isn't just the loss of her parents, or the way her Wall Street boyfriend treats her, or her sadomasochistic relationship with her best friend, Reva. It's the year 2000 in a city aglitter with wealth and possibility; what could be so terribly wrong?

  My Year of Rest and Relaxation is a powerful answer to that question. Through the story of a year spent under the influence of a truly mad combination of drugs designed to heal our heroine from her alienation from this world, Moshfegh shows us how reasonable, even necessary, alienation can be. Both tender and blackly funny, merciless and compassionate, it is a showcase for the gifts of one of our major writers working at the height of her powers.", 
  cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1513096558l/36552920._SY475_.jpg', publisher: 'Harper Collins', 
  pages: 303,
  isbn: "0525510540",
  release_date: "2018-09-10"
)

Review.create!({
  user_id: user2.id, book_id: rest.id, rating: 4, review_text: "I really really enjoyed this one. I feel like Ottessa Moshfegh let herself loose with a bizarre idea and it totally payed off. I'm still not sure if I liked the main character and I love that. Overall very much recommend!"
})

Review.create!({
  user_id: user1.id, book_id: rest.id, rating: 4, review_text: "Hilarious and sad at the same time."
})




stories_book = Book.create!(
  title: 'Stories of Your Life and Others', 
  author: 'Ted Chiang', 
  description: "Ted Chiang's first published story, 'Tower of Babylon', won the Nebula Award in 1990. Subsequent stories have won the Asimov's SF Magazine reader poll, a second Nebula Award, the Theodore Sturgeon Memorial Award, and the Sidewise Award for alternate history. He won the John W. Campbell Award for Best New Writer in 1992. Story for story, he is the most honored young writer in modern SF.
  
  Now, collected here for the first time are all seven of this extraordinary writer's stories so far-plus an eighth story written especially for this volume.
  
  What if men built a tower from Earth to Heaven-and broke through to Heaven's other side? What if we discovered that the fundamentals of mathematics were arbitrary and inconsistent? What if there were a science of naming things that calls life into being from inanimate matter? What if exposure to an alien language forever changed our perception of time? What if all the beliefs of fundamentalist Christianity were literally true, and the sight of sinners being swallowed into fiery pits were a routine event on city streets? These are the kinds of outrageous questions posed by the stories of Ted Chiang. Stories of your life . . . and others.", 
  cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356138316l/223380.jpg', 
  publisher: 'Harper Collins', 
  pages: 281,
  isbn: "0525510540",
  release_date: "2010-09-10"
)

Review.create!({
  user_id: user2.id, book_id: stories_book.id, rating: 4, review_text: "I don't read very many short stories collection but after this one I feel like I now need to.
  
  This one contains the most mind bending and original sci-fi stories I've read in a while.
  
  My favorite what the last one!"
})
Review.create!({
  user_id: user1.id, book_id: stories_book.id, rating: 4, review_text: "Amazing collection of short stories, not quite all sci-fi, but written with full knowledge of the genre. Amazing."
})

# rest_book = Book.create!(
#   title: 'Trick Mirror: Reflections on Self-Delusion', 
#   author: 'Jia Tolentino', 
#   description: "Trick Mirror is an enlightening, unforgettable trip through the river of self-delusion that surges just beneath the surface of our lives. This is a book about the incentives that shape us, and about how hard it is to see ourselves clearly in a culture that revolves around the self. In each essay, Jia writes about the cultural prisms that have shaped her: the rise of the nightmare social internet; the American scammer as millennial hero; the literary heroine’s journey from brave to blank to bitter; the mandate that everything, including our bodies, should always be getting more efficient and beautiful until we die.", 
#   cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544069605l/43126457.jpg', publisher: 'Harper Collins', 
#   pages: 303,
#   isbn: "0525510540",
#   release_date: "2019-09-10"
# )

catch_and_kill_book = Book.create!(
  {
    title: 'Catch and Kill: : Lies, Spies, and a Conspiracy to Protect Predators', 
    author: 'Ronan Farrow', 
    description: 
      'Both a spy thriller and a meticulous work of investigative journalism, Catch and Kill breaks devastating new stories about the rampant abuse of power and sheds far-reaching light on investigations that shook our culture.', 
    cover_url: 'https://images-na.ssl-images-amazon.com/images/I/41rOxRzBevL.jpg', 
    publisher: 'Little, Brown and Company', 
    pages: 465,
    isbn: "9780316486668",
    release_date: "2019-10-15"
  }
)

collected_book = Book.create!(
  {
    title: 'The Collected Schizophrenias: Essays', 
    author: 'Esmé Weijun Wang', 
    description: 
      "An intimate, moving book written with the immediacy and directness of one who still struggles with the effects of mental and chronic illness, The Collected Schizophrenias cuts right to the core. Schizophrenia is not a single unifying diagnosis, and Esmé Weijun Wang writes not just to her fellow members of the 'collected schizophrenias' but to those who wish to understand it as well. Opening with the journey toward her diagnosis of schizoaffective disorder, Wang discusses the medical community's own disagreement about labels and procedures for diagnosing those with mental illness, and then follows an arc that examines the manifestations of schizophrenia in her life. In essays that range from using fashion to present as high-functioning to the depths of a rare form of psychosis, and from the failures of the higher education system and the dangers of institutionalization to the complexity of compounding factors such as PTSD and Lyme disease, Wang's analytical eye, honed as a former lab researcher at Stanford, allows her to balance research with personal narrative. An essay collection of undeniable power, The Collected Schizophrenias dispels misconceptions and provides insight into a condition long misunderstood.", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1527408064l/40121993.jpg', 
    publisher: 'Graywolf Press', 
    pages: 208,
    isbn: "1555978274",
    release_date: "2019-02-05"
  }
)


blood_book = Book.create!(
  {
    title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup', 
    author: 'John Carreyrou', 
    description: 
      "The full inside story of the breathtaking rise and shocking collapse of a multibillion-dollar startup, by the prize-winning journalist who first broke the story and pursued it to the end in the face of pressure and threats from the CEO and her lawyers.", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556268702l/37976541.jpg', 
    publisher: 'Knopf Publishing Group', 
    pages: 339,
    isbn: "9781524731656",
    release_date: "2018-02=5-05"
  }
)

review1 = Review.create!(book_id: blood_book.id, user_id: user1.id, rating: 5, review_text: "Great")
Review.create!(book_id: blood_book.id, user_id: demo_user.id, rating: 4, review_text: "Wow")


Review.create!(book_id: collected_book.id, user_id: demo_user.id, rating: 4, review_text: "Wow")

# repeats

grunt = Book.create!(
  {
    title: 'Grunt: The Curious Science of Humans at War', 
    author: 'Mary Roach', 
    description: 
      "Best-selling author Mary Roach explores the science of keeping human beings intact, awake, sane, uninfected, and uninfested in the bizarre and extreme circumstances of war. Grunt tackles the science behind some of a soldier's most challenging adversaries—panic, exhaustion, heat, noise—and introduces us to the scientists who seek to conquer them.

      Mary Roach dodges hostile fire with the U.S. Marine Corps Paintball Team as part of a study on hearing loss and survivability in combat. She visits the fashion design studio of U.S. Army Natick Labs and learns why a zipper is a problem for a sniper. She visits a repurposed movie studio where amputee actors help prepare Marine Corps medics for the shock and gore of combat wounds.

      At Camp Lemmonier, Djibouti, in east Africa, we learn how diarrhea can be a threat to national security. Roach samples caffeinated meat, sniffs an archival sample of a World War II stink bomb, and stays up all night with the crew tending the missiles on the nuclear submarine USS Tennessee. She answers questions not found in any other book on the military: Why is DARPA interested in ducks? How is a wedding gown like a bomb suit? Why are shrimp more dangerous to sailors than sharks? Take a tour of duty with Roach, and you’ll never see our nation’s defenders in the same way again.", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463185939l/26530320.jpg', 
    publisher: 'Knopf Publishing Group', 
    pages: 285,
    isbn: "0393245446",
    release_date: "2018-02=5-05"
  }
)
Review.create!(book_id: grunt.id, user_id: user1.id, rating: 5, review_text: "Great")


stories_book2 = Book.create!(
  title: 'Stories of Your Life and Others', 
  author: 'Ted Chiang', 
  description: "Ted Chiang's first published story, 'Tower of Babylon', won the Nebula Award in 1990. Subsequent stories have won the Asimov's SF Magazine reader poll, a second Nebula Award, the Theodore Sturgeon Memorial Award, and the Sidewise Award for alternate history. He won the John W. Campbell Award for Best New Writer in 1992. Story for story, he is the most honored young writer in modern SF.
  
  Now, collected here for the first time are all seven of this extraordinary writer's stories so far-plus an eighth story written especially for this volume.
  
  What if men built a tower from Earth to Heaven-and broke through to Heaven's other side? What if we discovered that the fundamentals of mathematics were arbitrary and inconsistent? What if there were a science of naming things that calls life into being from inanimate matter? What if exposure to an alien language forever changed our perception of time? What if all the beliefs of fundamentalist Christianity were literally true, and the sight of sinners being swallowed into fiery pits were a routine event on city streets? These are the kinds of outrageous questions posed by the stories of Ted Chiang. Stories of your life . . . and others.", 
  cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356138316l/223380.jpg', 
  publisher: 'Harper Collins', 
  pages: 282,
  isbn: "052550010540",
  release_date: "2010-09-10"
)

Book.create!(
  {
    title: 'Consider the Lobster & Other Essays', 
    author: 'David Foster Wallace', 
    description: 
      "Do lobsters feel pain? Did Franz Kafka have a funny bone? What is John Updike's deal, anyway? And what happens when adult video starlets meet their fans in person? David Foster Wallace answers these questions and more in essays that are also enthralling narrative adventures. Whether covering the three-ring circus of a vicious presidential race, plunging into the wars between dictionary writers, or confronting the World's Largest Lobster Cooker at the annual Maine Lobster Festival, Wallace projects a quality of thought that is uniquely his and a voice as powerful and distinct as any in American letters.", 
    cover_url: 'https://images-na.ssl-images-amazon.com/images/I/41LuDLgf0lL._SX331_BO1,204,203,200_.jpg', 
    publisher: 'Little, Brown and Company', 
    pages: 353,
    isbn: "0-7595-1183-7",
    release_date: "2005-12-15"
  }
)

chem2 = Book.create!(
  {
    title: "Chemistry", 
    author: "Weike Wang",
    description: 
      "At first glance, the quirky, overworked narrator [of this] novel seems to be on the cusp of a perfect life: she is studying for a prestigious PhD in chemistry that will make her Chinese parents proud (or at least satisfied), and her successful, supportive boyfriend has just proposed to her. But instead of feeling hopeful, she is wracked with ambivalence: the long demanding hours at the lab have created an exquisite pressure cooker, and she doesn't know how to answer the marriage question. When is all becomes too much and her life plan veers off course, she finds herself on a new path of discoveries about everything she thought she knew.", 
    cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1479350390l/31684925._SY475_.jpg", 
    publisher: 'Flatiron Books', 
    pages: 342,
    isbn: "1250107814",
    release_date: "2018-04-03"
  }
)


Review.create!(book_id: chem2.id, user_id: user1.id, rating: 5, review_text: "Taut novel, tight prose. Fascinating approach to telling a story. Lots of ambition here. Found myself so frustrated and willing the narrator to make the choices I wanted her to make. So many lovely moments and turns of phrase. Interesting ending. Liked this book very much.
")

Book.create!(
  {
    title: "Factfulness: Ten Reasons We're Wrong About the World—and Why Things Are Better Than You Think", 
    author: 'Hans Rosling', 
    description: 
      "In Factfulness, professor of international health and global TED phenomenon Hans Rosling, together with his two longtime collaborators, Anna and Ola, offers a radical new explanation of why this happens. They reveal the ten instincts that distort our perspective—from our tendency to divide the world into two camps (usually some version of us and them) to the way we consume media (where fear rules) to how we perceive progress (believing that most things are getting worse). Our problem is that we don't know what we don't know, and even our guesses are informed by unconscious and predictable biases.", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544964112l/40933227._SY475_.jpg', 
    publisher: 'Flatiron Books', 
    pages: 342,
    isbn: "1250107814",
    release_date: "2018-04-03"
  }
)

blood_book2 = Book.create!(
  {
    title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup', 
    author: 'John Carreyrou', 
    description: 
      "The full inside story of the breathtaking rise and shocking collapse of a multibillion-dollar startup, by the prize-winning journalist who first broke the story and pursued it to the end in the face of pressure and threats from the CEO and her lawyers.", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556268702l/37976541.jpg', 
    publisher: 'Knopf Publishing Group', 
    pages: 349,
    isbn: "9781524731656",
    release_date: "2018-02=5-05"
  }
)
animals = Book.create!(
  {
    title: 'Eating Animals', 
    author: 'Jonathan Safran Foer ', 
    description: 
      "Jonathan Safran Foer spent much of his life oscillating between enthusiastic carnivore and occasional vegetarian. Once he started a family, the moral dimensions of food became increasingly important.

      Faced with the prospect of being unable to explain why we eat some animals and not others, Foer set out to explore the origins of many eating traditions and the fictions involved with creating them. Traveling to the darkest corners of our dining habits, Foer raises the unspoken question behind every fish we eat, every chicken we fry, and every burger we grill.

      Part memoir and part investigative report, Eating Animals is a book that, in the words of the Los Angeles Times, places Jonathan Safran Foer 'at the table with our greatest philosophers.'", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327941328l/3117996.jpg', 
    publisher: 'Knopf Publishing Group', 
    pages: 349,
    isbn: "9781524731656",
    release_date: "2018-02=5-05"
  }
)
turing = Book.create!(
  {
    title: "Turing's Cathedral: The Origins of the Digital Universe", 
    author: 'George Dyson ', 
    description: 
      "'It is possible to invent a single machine which can be used to compute any computable sequence,' twenty-four-year-old Alan Turing announced in 1936. In Turing’s Cathedral, George Dyson focuses on a small group of men and women, led by John von Neumann at the Institute for Advanced Study in Princeton, New Jersey, who built one of the first computers to realize Alan Turing’s vision of a Universal Machine. Their work would break the distinction between numbers that mean things and numbers that do things—and our universe would never be the same.
      
      Using five kilobytes of memory (the amount allocated to displaying the cursor on a computer desktop of today), they achieved unprecedented success in both weather prediction and nuclear weapons design, while tackling, in their spare time, problems ranging from the evolution of viruses to the evolution of stars.

      Dyson’s account, both historic and prophetic, sheds important new light on how the digital universe exploded in the aftermath of World War II. The proliferation of both codes and machines was paralleled by two historic developments: the decoding of self-replicating sequences in biology and the invention of the hydrogen bomb. It’s no coincidence that the most destructive and the most constructive of human inventions appeared at exactly the same time.
      
      How did code take over the world? In retracing how Alan Turing’s one-dimensional model became John von Neumann’s two-dimensional implementation, Turing’s Cathedral offers a series of provocative suggestions as to where the digital universe, now fully three-dimensional, may be heading next.", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1322700777l/12625589.jpg', 
    publisher: 'Knopf Publishing Group', 
    pages: 349,
    isbn: "9781524731656",
    release_date: "2018-02=5-05"
  }
)


Book.create!(
  {
    title: 'Consider the Lobster & Other Essays', 
    author: 'David Foster Wallace', 
    description: 
      "Do lobsters feel pain? Did Franz Kafka have a funny bone? What is John Updike's deal, anyway? And what happens when adult video starlets meet their fans in person? David Foster Wallace answers these questions and more in essays that are also enthralling narrative adventures. Whether covering the three-ring circus of a vicious presidential race, plunging into the wars between dictionary writers, or confronting the World's Largest Lobster Cooker at the annual Maine Lobster Festival, Wallace projects a quality of thought that is uniquely his and a voice as powerful and distinct as any in American letters.", 
    cover_url: 'https://images-na.ssl-images-amazon.com/images/I/41LuDLgf0lL._SX331_BO1,204,203,200_.jpg', 
    publisher: 'Little, Brown and Company', 
    pages: 353,
    isbn: "0-7595-1183-7",
    release_date: "2005-12-15"
  }
)
grunt2 = Book.create!(
  {
    title: 'Grunt: The Curious Science of Humans at War', 
    author: 'Mary Roach', 
    description: 
      "Best-selling author Mary Roach explores the science of keeping human beings intact, awake, sane, uninfected, and uninfested in the bizarre and extreme circumstances of war. Grunt tackles the science behind some of a soldier's most challenging adversaries—panic, exhaustion, heat, noise—and introduces us to the scientists who seek to conquer them.

      Mary Roach dodges hostile fire with the U.S. Marine Corps Paintball Team as part of a study on hearing loss and survivability in combat. She visits the fashion design studio of U.S. Army Natick Labs and learns why a zipper is a problem for a sniper. She visits a repurposed movie studio where amputee actors help prepare Marine Corps medics for the shock and gore of combat wounds.

      At Camp Lemmonier, Djibouti, in east Africa, we learn how diarrhea can be a threat to national security. Roach samples caffeinated meat, sniffs an archival sample of a World War II stink bomb, and stays up all night with the crew tending the missiles on the nuclear submarine USS Tennessee. She answers questions not found in any other book on the military: Why is DARPA interested in ducks? How is a wedding gown like a bomb suit? Why are shrimp more dangerous to sailors than sharks? Take a tour of duty with Roach, and you’ll never see our nation’s defenders in the same way again.", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463185939l/26530320.jpg', 
    publisher: 'Knopf Publishing Group', 
    pages: 285,
    isbn: "0393245446",
    release_date: "2018-02=5-05"
  }
)

collected_book2 = Book.create!(
  {
    title: 'The Collected Schizophrenias: Essays', 
    author: 'Esmé Weijun Wang', 
    description: 
      "An intimate, moving book written with the immediacy and directness of one who still struggles with the effects of mental and chronic illness, The Collected Schizophrenias cuts right to the core. Schizophrenia is not a single unifying diagnosis, and Esmé Weijun Wang writes not just to her fellow members of the 'collected schizophrenias' but to those who wish to understand it as well. Opening with the journey toward her diagnosis of schizoaffective disorder, Wang discusses the medical community's own disagreement about labels and procedures for diagnosing those with mental illness, and then follows an arc that examines the manifestations of schizophrenia in her life. In essays that range from using fashion to present as high-functioning to the depths of a rare form of psychosis, and from the failures of the higher education system and the dangers of institutionalization to the complexity of compounding factors such as PTSD and Lyme disease, Wang's analytical eye, honed as a former lab researcher at Stanford, allows her to balance research with personal narrative. An essay collection of undeniable power, The Collected Schizophrenias dispels misconceptions and provides insight into a condition long misunderstood.", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1527408064l/40121993.jpg', 
    publisher: 'Graywolf Press', 
    pages: 208,
    isbn: "15559782744",
    release_date: "2019-02-05"
  }
)

chem = Book.create!(
  {
    title: "Chemistry", 
    author: "Weike Wang",
    description: 
      "At first glance, the quirky, overworked narrator [of this] novel seems to be on the cusp of a perfect life: she is studying for a prestigious PhD in chemistry that will make her Chinese parents proud (or at least satisfied), and her successful, supportive boyfriend has just proposed to her. But instead of feeling hopeful, she is wracked with ambivalence: the long demanding hours at the lab have created an exquisite pressure cooker, and she doesn't know how to answer the marriage question. When is all becomes too much and her life plan veers off course, she finds herself on a new path of discoveries about everything she thought she knew.", 
    cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1479350390l/31684925._SY475_.jpg", 
    publisher: 'Flatiron Books', 
    pages: 342,
    isbn: "1250107814",
    release_date: "2018-04-03"
  }
)


Review.create!(book_id: chem.id, user_id: user1.id, rating: 5, review_text: "Taut novel, tight prose. Fascinating approach to telling a story. Lots of ambition here. Found myself so frustrated and willing the narrator to make the choices I wanted her to make. So many lovely moments and turns of phrase. Interesting ending. Liked this book very much.
")


Book.create!(
  {
    title: "Factfulness: Ten Reasons We're Wrong About the World—and Why Things Are Better Than You Think", 
    author: 'Hans Rosling', 
    description: 
      "In Factfulness, professor of international health and global TED phenomenon Hans Rosling, together with his two longtime collaborators, Anna and Ola, offers a radical new explanation of why this happens. They reveal the ten instincts that distort our perspective—from our tendency to divide the world into two camps (usually some version of us and them) to the way we consume media (where fear rules) to how we perceive progress (believing that most things are getting worse). Our problem is that we don't know what we don't know, and even our guesses are informed by unconscious and predictable biases.", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544964112l/40933227._SY475_.jpg', 
    publisher: 'Flatiron Books', 
    pages: 342,
    isbn: "1250107814",
    release_date: "2018-04-03"
  }
)
Book.create!(
  {
    title: 'Consider the Lobster & Other Essays', 
    author: 'David Foster Wallace', 
    description: 
      "Do lobsters feel pain? Did Franz Kafka have a funny bone? What is John Updike's deal, anyway? And what happens when adult video starlets meet their fans in person? David Foster Wallace answers these questions and more in essays that are also enthralling narrative adventures. Whether covering the three-ring circus of a vicious presidential race, plunging into the wars between dictionary writers, or confronting the World's Largest Lobster Cooker at the annual Maine Lobster Festival, Wallace projects a quality of thought that is uniquely his and a voice as powerful and distinct as any in American letters.", 
    cover_url: 'https://images-na.ssl-images-amazon.com/images/I/41LuDLgf0lL._SX331_BO1,204,203,200_.jpg', 
    publisher: 'Little, Brown and Company', 
    pages: 353,
    isbn: "0-7595-1183-7",
    release_date: "2005-12-15"
  }
)

book4 = Book.create!(
  {
    title: "Factfulness: Ten Reasons We're Wrong About the World—and Why Things Are Better Than You Think", 
    author: 'Hans Rosling', 
    description: 
      "In Factfulness, professor of international health and global TED phenomenon Hans Rosling, together with his two longtime collaborators, Anna and Ola, offers a radical new explanation of why this happens. They reveal the ten instincts that distort our perspective—from our tendency to divide the world into two camps (usually some version of us and them) to the way we consume media (where fear rules) to how we perceive progress (believing that most things are getting worse). Our problem is that we don't know what we don't know, and even our guesses are informed by unconscious and predictable biases.", 
    cover_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544964112l/40933227._SY475_.jpg', 
    publisher: 'Flatiron Books', 
    pages: 342,
    isbn: "1250107814",
    release_date: "2018-04-03"
  }
)
