import React from "react";
import { Link } from "react-router-dom";

class BookIndexItem extends React.Component {
  render() {
    return (
      <li className="book-index-item">
        <div><img src={this.props.book.cover_url} height="200" width="150" /></div>
        <div>Title: {this.props.book.title}</div>
        <div>Author: {this.props.book.author}</div>
        <div><Link to={`/books/${this.props.book.id}`}>Show Page</Link></div>
      </li>
    );
  }
}

export default BookIndexItem;
