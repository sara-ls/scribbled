import React from "react";

class TopBooks extends React.Component {
  render() {
    return (
      <div className="top-books">
        <h2>All of the Best Books</h2>
        <div className="book-covers-container">
          <img className="book-cover" src="assets/book-covers/chemistry.jpg" />
          <img
            className="book-cover"
            src="assets/book-covers/consider-the-lobster.jpg"
          />
          <img className="book-cover" src="assets/book-covers/DearGirls.jpg" />
          <img className="book-cover" src="assets/book-covers/fleabag.jpg" />
          <img className="book-cover" src="assets/book-covers/sapiens.jpg" />
          <img className="book-cover" src="assets/book-covers/homo-deus.jpg" />
          <img
            className="book-cover"
            src="assets/book-covers/trick-mirror.jpg"
          />
          <img
            className="book-cover"
            src="assets/book-covers/bad_blood_cover.png"
          />
        </div>
      </div>
    );
  }
}

export default TopBooks;
