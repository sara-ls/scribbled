import React from "react";
import { connect } from "react-redux";
import Rating from "react-rating";

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let allReviews = null;
    if (this.props.book.reviews) {
      if (this.props.book.reviews.length === 0 ) {
        return <div>No reviews yet</div>
      }
      let rev = this.props.book.reviews.sort((a, b) => b.id - a.id)
      allReviews = rev.map(review => {
        if (review) {
          let userClass =
            this.props.user_id === review.user_id ? "users-review" : "";
          return (
            <li key={review.id} className={`review-item ${userClass}`}>
              <div className="review-left">
                <div className="review-text">{review.review_text}</div>
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
                        height="21px"
                        padding-right="0px"
                        className="icon"
                        id="color-star"
                      />
                    }
                  />
                </div>
                {/* <div>({review.rating}/5)</div> */}
              </div>
            </li>
          );
        } else {
          return null;
        }
      });
    }
    return allReviews;
  }
}

export default ReviewsList;
