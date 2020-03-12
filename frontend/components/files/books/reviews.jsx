import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { faCopy, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as Fas } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review_text: undefined,
      rating: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field, rate = null) {
    return e => {
      if (field === "rating") {
        this.setState({
          rating: [rate]
        });
      } else {
        this.setState({
          [field]: e.currentTarget.value
        });
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitReview(Object.assign({}, this.state));
    // redirect
  }

  render() {
    let allReviews = null;
    if (this.props.book.reviews) {
      allReviews = this.props.book.reviews.map(review => {
        return (
          <li key={review.id} className="review-item">
            <div className="review-left">
              <div>{review.review_text}</div>
            </div>
            <div className="review-right">
              <div className="small-rating">
                <Rating
                  emptySymbol={<FontAwesomeIcon icon={faStar} />}
                  fullSymbol={<FontAwesomeIcon icon={Fas} />}
                  readOnly={true}
                  initialRating={review.rating}
                />
              </div>
              <div>({review.rating}/5)</div>
            </div>
          </li>
        );
      });
    }

    return (
      <div>
        <div className="review-form-container">
          <form className="review-form">
            <div className="form-row">
              <div className="rating-label">What did you think?</div>
              <div className="rating-container">
                <Rating
                  emptySymbol={<FontAwesomeIcon icon={faStar} />}
                  fullSymbol={<FontAwesomeIcon icon={Fas} />}
                  value={this.state.rating}
                  onChange={rate => this.update("rating", rate)}
                />
              </div>
            </div>

            <div className="rating-label review-label">Write a Review?</div>
            <textarea
              id="review-input"
              placeholder="Tell us what you liked about the book!"
              value={this.state.review_text}
              onChange={() => this.update("review_text")}
              className="upload-input"
            />
            <div className="review-btn-container">
              <button className="post-review-btn submit-btn">
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
