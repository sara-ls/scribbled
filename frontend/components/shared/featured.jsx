import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-container">
        <div className="featured-left">
          <div className="featured-info">
            <label className="featured-label">Today's Top Pick</label>
            <h2 className="featured-header">Catch and Kill</h2>
            <h3 className="featured-subheader">by Ronan Farrow</h3>
            <p className="featured-para">
              Both a spy thriller and a meticulous work of investigative
              journalism, Catch and Kill breaks devastating new stories about
              the rampant abuse of power and sheds far-reaching light on
              investigations that shook our culture.
            </p>
          </div>
          <div className="featured-btns-container">
            {/* <button className="featured-listen-now-btn"></button> */}
            {/* <button className="featured-save-btn"></button> */}
          </div>
        </div>
        <div className="featured-img-container">
          <img
            className="book-cover featured"
            src="https://images-na.ssl-images-amazon.com/images/I/41rOxRzBevL.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
