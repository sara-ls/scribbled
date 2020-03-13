import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

class BookIndexItem extends React.Component {
  render() {
    return (
      <div className="book-index-item">
        {/* {this.props.rank ? (
          <div className="rank">
            {this.props.rank}.
          </div>
        ) : null} */}
        <div className="book-index-img-container">
          {/* <Link to={`/books/${this.props.book.id}`}> */}
            <img src={this.props.book.cover_url} height="205" />
          {/* </Link> */}
        </div>
        <div className="index-title">
          <Link to={`/books/${this.props.book.id}`}>
            <div>{this.props.book.title}</div>
          </Link>
        </div>
        <div className="index-author">{this.props.book.author}</div>
        <div className="small-rating rating-wrapper" id="xs-star">
          {this.props.book.average_rating ? (
            <Rating
              readonly
              initialRating={this.props.book.average_rating}
              emptySymbol={
                <img
                  src={window.starEmptyURL}
                  opacity="0"
                  height="15px"
                  margin-right="5px"
                  className="icon"
                  id="empty-star"
                />
              }
              fullSymbol={
                <img
                  src={window.redStarFullURL}
                  height="15px"
                  margin-right="5px"
                  className="icon"
                  id="color-star"
                />
              }
            />
          ) : (
            <span></span>
          )}
        </div>
        {this.props.description ? (
          <div className="description-contain">
            {this.props.book.description}
          </div>
        ) : null}
      </div>
    );
  }
}

export default BookIndexItem;
