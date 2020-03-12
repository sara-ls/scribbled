class Api::ReviewsController < ApplicationController
  def show
    @review = Review.find_by(id: params[:id])
    render "api/reviews/show"
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render "api/reviews/show"
    else 
      render json: @review.errors.full_messages, status: 422
    end
  end


  def review_params
    params.require(:review).permit(:user_id, :book_id, :review_text, :rating)
  end
end
