class Api::BooksController < ApplicationController
  before_action :require_logged_in

  def show
    @book = Book.find_by(id: params[:id])
    render "api/books/show"
  end

  def index
    @books = Book.all
    render "api/books/index"
  end
end
