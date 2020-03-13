import React from "react";

const TopBooks = () => {
  return (
    <div className="top-books">
      <h2>All of the Best Books</h2>
      <div className="book-covers-container">
        <img
          className="book-cover"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1479350390l/31684925._SY475_.jpg"
        />
        <img
          className="book-cover"
          src="https://images-na.ssl-images-amazon.com/images/I/41LuDLgf0lL._SX331_BO1,204,203,200_.jpg'"
        />
        <img className="book-cover" src={window.girlsURL} />
        <img className="book-cover" src={window.fleaURL} />
        <img className="book-cover" src={window.sapiensURL} />
        <img className="book-cover" src={window.deusURL} />
        <img
          className="book-cover"
          src="https://images-na.ssl-images-amazon.com/images/I/41rOxRzBevL.jpg"
        />
        <img
          className="book-cover"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544069605l/43126457.jpg"
        />
        <img className="book-cover" src={window.bad_blood_coverURL} />
        <img
          className="book-cover"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544069605l/43126457.jpg"
        />
        <img className="book-cover" src={window.schizo_coverURL} />
        <img className="book-cover" src={window.animalsURL} />
        <img className="book-cover" src={window.storiesURL} />
        <img className="book-cover" src={window.talkURL} />
        <img className="book-cover" src={window.enlightURL} />
        <img className="book-cover" src={window.factURL} />
      </div>
    </div>
  );
};

export default TopBooks;
