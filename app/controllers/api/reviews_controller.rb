class Api::ReviewsController < ApplicationController
  def show
    @review = Review.find_by(id: params[:id])
    render "api/reviews/show"
  end
end
