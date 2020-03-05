import React from "react";

class TopBooks extends React.Component {
  render() {
    return (
      <div className="top-books">
        <h2>All of the Best Books</h2>
        <div className="book-covers-container">
          <img className="book-cover" src={window.killURL} />
          <img className="book-cover" src={window.chemistryURL} />
          <img className="book-cover" src={window.lobsterURL} />
          <img className="book-cover" src={window.girlsURL} />
          <img className="book-cover" src={window.fleaURL} />
          <img className="book-cover" src={window.sapiensURL} />
          <img className="book-cover" src={window.deusURL} />
          <img
            className="book-cover"
            src={window.trickURL}
          />
          <img className="book-cover" src={window.bad_blood_coverURL} />
          <img
            className="book-cover"
            src={window.restURL}
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
  }
}

export default TopBooks;
