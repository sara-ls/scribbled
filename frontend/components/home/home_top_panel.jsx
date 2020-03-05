import React from "react";

const HomeTopPanel = props => {
  return (
    <div className="home-content-box">
      <div className="home-content">
        <span>
          Thousands of the best books, audiobooks, and more. All in one app.
        </span>
        <button
          className="signup-btn"
          onClick={() => {
            props.openModal("signup");
            window.scrollTo(0, window.modalRef.current.offsetTop);
          }}
        >
          Start Your Free Trial
        </button>
      </div>
    </div>
  );
};

export default HomeTopPanel;
