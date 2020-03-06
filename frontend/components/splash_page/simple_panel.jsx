import React from "react";

const HomeSimplePanel = props => {
  return (
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
            props.openModal("signup");
            window.scrollTo(0, window.modalRef.current.offsetTop);
          }}
        >
          Read Free for 30 Days
        </button>
      </div>
    </div>
  );
};

export default HomeSimplePanel;
