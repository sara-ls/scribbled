import React from "react";
import { Link } from "react-router-dom";
import TopBooks from './top_books'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        {/* <img className="splash-img" src="assets/splash.jpg" /> */}
        <div className="home-content-box">
          <div className="home-content">
            <span>
              Thousands of the best books, audiobooks, and more. All in one app.
            </span>
            <button className="signup-btn" onClick={this.props.openModal}>
              Start Your Free Trial
            </button>
          </div>
        </div>
        <div className="offerings-container">
          <div className="offerings">
            <h2 className="offerings-heading">Put a Library in Your Pocket</h2>
            <div className="landing-sub-heading">
              Free for 30 days. What will you read next?
            </div>
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
        <TopBooks />
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
            <button className="signup-btn" onClick={this.props.openModal}>
              Read Free for 30 Days
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
 