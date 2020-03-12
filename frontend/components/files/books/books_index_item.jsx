import React from "react";
import { Link } from "react-router-dom";

class BookIndexItem extends React.Component {
  render() {
    return (
      <div className="book-index-item">
        <div className="book-index-img-container">
          <img src={this.props.book.cover_url} height="205" />
        </div>
        <div className="index-title">
          <Link to={`/books/${this.props.book.id}`}>
            <div>{this.props.book.title}</div>
          </Link>
        </div>
        <div className="index-author">{this.props.book.author}</div>
      </div>
    );
  }
}

export default BookIndexItem;
