# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

User.destroy_all
Document.destroy_all
Book.destroy_all
Review.destroy_all

user1 = User.create!(
  email: 'user1@gmail.com', 
  full_name: 'User One', 
  password: 'abcd1234'
)

demo_user = User.create!(
  email: 'demo@demo.demo', 
  full_name: 'Demo User', 
  password: 'demopassword'
)

doc1 = Document.create!(title: 'Catch and Kill', description: 'Both a spy thriller and a meticulous work of investigative journalism, Catch and Kill breaks devastating new stories about the rampant abuse of power and sheds far-reaching light on investigations that shook our culture.', user_id: user1.id, thumbnail_url: '', document_url: '', format: 'pdf', private: false)

sapiens_book = Book.create!(
  title: 'Sapiens', 
  author: 'Yuval Noah Harari', 
  description: 'From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be human.', 
  cover_url: 'https://images-na.ssl-images-amazon.com/images/I/51Sn8PEXwcL.jpg', publisher: 'Harper Collins', 
  pages: 631,
  isbn: "9780062316103",
  release_date: "2015-02-10"
)

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
