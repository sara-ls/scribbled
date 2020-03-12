import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "react-rating";

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review_text: "",
      rating: undefined,
      book_id: this.props.book.id,
      user_id: this.props.user_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetRating = this.resetRating.bind(this);
    // this.updateLabel = this.updateLabel.bind(this);
  }

  // updateLabel(rate) {
  //   if(this.state.rating !== undefined) {
  //     this.starLabel = (
  //     <div>{rate}</div>
  //   )
  //   } else {
  //     this.starLabel = null
  //   }
    
  // }

  // starLabel(rate) {
  //   let
  //   if (this.state.rating !== undefined) {
  //     this.starLabel = <div>{rate}</div>;
  //   } else {
  //     this.starLabel = null;
  //   }
  // }

  resetRating() {
    this.setState({
      rating: undefined
    });
  }
  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let review = this.state;
    review.rating = parseInt(review.rating);

    this.props.submitReview(review);
    // redirect
  }

  render() {
    let allReviews = null;
    if (this.props.book.reviews) {
      allReviews = this.props.book.reviews.map(review => {
        if (review) {
          return (
            <li key={review.id} className="review-item">
              <div className="review-left">
                <div>{review.review_text}</div>
              </div>
              <div className="review-right">
                <div className="small-rating">
                  <Rating
                    initialRating={review.rating}
                    readonly
                    placeholderRating={review.rating}
                    emptySymbol={
                      <img
                        src={window.starEmptyURL}
                        opacity="0.4"
                        className="icon"
                        id="empty-star"
                      />
                    }
                    fullSymbol={
                      <img
                        src={window.redStarFullURL}
                        height="25px"
                        padding-right="5px"
                        className="icon"
                        id="color-star"
                      />
                    }
                  />
                </div>
                <div>({review.rating}/5)</div>
              </div>
            </li>
          );
        } else {
          return null;
        }
      });
    }

    let resetBtn = null;

    if (this.state.rating !== undefined) {
      resetBtn = (
        <button className="rating-reset-button" onClick={this.resetRating}>
          Clear Rating
        </button>
      );
    }

    return (
      <div>
        <div className="review-form-container">
          <form className="review-form">
            <div className="form-row">
              <div className="rating-label">What did you think?</div>
              <div className="rating-container">
                <Rating
                  initialRating={this.state.rating}
                  value={this.state.rating}
                  emptySymbol={
                    <img
                      src={window.starEmptyURL}
                      id="form-rating-star"
                      className="icon"
                    />
                  }
                  fullSymbol={
                    <img
                      src={window.starFullURL}
                      id="form-rating-star"
                      className="icon"
                    />
                  }
                  // onHover={rate => this.updateLabel(rate)}
                  onClick={rate => this.setState({ rating: [rate] })}
                />
                {/* {this.starLabel} */}
                {resetBtn}
              </div>
            </div>
            <div className="rating-label review-label">Write a Review?</div>
            <textarea
              id="review-input"
              placeholder="Tell us what you liked about the book!"
              value={this.state.review_text}
              onChange={this.update("review_text")}
              className="upload-input"
            />
            <div className="review-btn-container">
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="post-review-btn submit-btn"
              >
                Post Review
              </button>
            </div>
          </form>
        </div>
        <div>
          <ul className="reveiws-list">{allReviews}</ul>
        </div>
      </div>
    );
  }
}

export default Reviews;
