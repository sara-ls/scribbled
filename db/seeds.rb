# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

User.destroy_all
Document.destroy_all
Book.destroy_all

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
    title: 'Catch and Kill', 
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
