# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Document.destroy_all
Book.destroy_all

user1 = User.create!(email: 'user1@gmail.com', full_name: 'User One', password: 'abcd1234')

demo_user = User.create!(email: 'demo@demo.demo', full_name: 'Demo User', password: 'demopassword')

catch_document = Document.create!(title: "Catch and Kill", description: "Both a spy thriller and a meticulous work of investigative journalism, Catch and Kill breaks devastating new stories about the rampant abuse of power and sheds far-reaching light on investigations that shook our culture.", user_id: user1.id, thumbnail_url: "", document_url: "", format: "pdf", private: false)

sapiens_book = Book.create!(title: "Sapiens", author: "Yuval Noah Harari", description: "From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be human.", cover_url: "https://images-na.ssl-images-amazon.com/images/I/51Sn8PEXwcL.jpg", publisher: "HarperCollins", pages: 631)

sapiens_book2 = Book.create!(title: "Sapiens", author: "Yuval Noah Harari", description: "From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be human.", cover_url: "https://images-na.ssl-images-amazon.com/images/I/51Sn8PEXwcL.jpg", publisher: "HarperCollins", pages: 631)