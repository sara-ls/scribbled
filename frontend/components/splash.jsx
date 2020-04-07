import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "../actions/modal_actions";

const Splash = ({ openModal }) => {
  return (
    <div className="main-component-container">
      <div className="home-content-box">
        <div className="home-content">
          <span>
            Thousands of the best books, audiobooks, and more. All in one app.
          </span>
          <button
            className="signup-btn"
            onClick={() => this.props.openModal("signup")}
          >
            Start Your Free Trial
          </button>
        </div>
      </div>
      <div className="offerings-container">
        <div className="offerings">
          <h2 className="offerings-heading">Put a Library in Your Pocket</h2>
          <div className="landing-sub-heading"></div>
          <ul className="offerings-list">
            <li className="offer-container">
              <img
                src="https://s-f.scribdassets.com/images/landing/brazil_mexico_landing/cards/books_card.png?c1c2ba05a"
                className="icon_img"
                alt="Books"
              />
              <div className="summary">Books</div>
              <div className="summary-subtext">
                Read your favorites from the biggest publishers.
              </div>
            </li>
            <li className="offer-container">
              <img
                src="https://s-f.scribdassets.com/images/landing/brazil_mexico_landing/cards/audiobooks_card.png?c1c2ba05a"
                className="icon_img"
                alt="Audioooks"
              />
              <div className="summary">Audiobooks</div>
              <div className="summary-subtext">
                Listen to books at home, in the office, or on the move.
              </div>
            </li>
            <li className="offer-container">
              <img
                src="https://s-f.scribdassets.com/images/landing/brazil_mexico_landing/cards/documents_card.png?c1c2ba05a"
                className="icon_img"
                alt="Documents"
              />
              <div className="summary">Documents</div>
              <div className="summary-subtext">
                Access court filings, academic papers, templates, and more.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="top-books">
        <h2>All of the Best Books</h2>
        <div className="book-covers-container">
          <img
            className="book-cover"
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1479350390l/31684925._SY475_.jpg"
          />
          <img
            className="book-cover"
            src="https://images-na.ssl-images-amazon.com/images/I/41LuDLgf0lL._SX331_BO1,204,203,200_.jpg"
          />
          <img className="book-cover" src={window.girlsURL} />
          <img className="book-cover" src={window.fleaURL} />
          <img
            className="book-cover"
            src="https://images-na.ssl-images-amazon.com/images/I/51Sn8PEXwcL.jpg"
          />
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
          <img
            className="book-cover"
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544964112l/40933227._SY475_.jpg"
          />
        </div>
      </div>
      <div className="fold">
        <h2>
          Read
          <strong>Without</strong>
          Limits
        </h2>
        <div className="landing-sub-heading">
          Unlimited books. Unlimited audiobooks.
        </div>
        <div className="cta-row">
          <button
            className="signup-btn"
            onClick={() => {
              this.props.openModal("signup");
              // window.scrollTo(0, window.modalRef.current.offsetTop);
            }}
          >
            Read Free for 30 Days
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(null, mapDispatchToProps)(Splash);
