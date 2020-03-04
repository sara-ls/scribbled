import React from "react";

class TopBooks extends React.Component {
  render() {
    return (
      <div className="top-books">
        <h2>All of the Best Books</h2>
        <div className="book-covers-container">
          <img className="book-cover" src="assets/book-covers/kill.jpg" />
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
          <img
            className="book-cover"
            src="assets/book-covers/My_Year_of_Rest_and_Relaxation.jpg"
          />
          <img
            className="book-cover"
            src="assets/book-covers/cover_schizopgrenias.jpg"
          />
          <img
            className="book-cover"
            src="assets/book-covers/animals.jpg"
          />
          <img
            className="book-cover"
            src="assets/book-covers/stories.jpg"
          />
          <img
            className="book-cover"
            src="assets/book-covers/talk.jpg"
          />
          <img
            className="book-cover"
            src="assets/book-covers/enlight.jpg"
          />
          <img
            className="book-cover"
            src="assets/book-covers/factfulness.jpg"
          />
        </div>
      </div>
    );
  }
}

export default TopBooks;
