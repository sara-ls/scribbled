import React from "react";

const Offerings = () => {
  return (
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
  );
};

export default Offerings;
