import React from "react";

class BookIndexItem extends React.Component {
  render() {
    return (
      <li className="book-index-item">
        <div>Title: {this.props.book.title}</div>
        <div>Author: {this.props.book.author}</div>
        <div><img src={this.props.book.cover_url} height="200" width="150" /></div>
      </li>
    );
  }
}

export default BookIndexItem;
