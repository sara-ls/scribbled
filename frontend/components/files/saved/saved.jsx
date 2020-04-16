import React from "react";
import SideBar from "../../ui/sidebar";

const Saved = () => {
  return (
    <div className="main-component-container">
      <SideBar showSidebar={true} />
      <div className="main-component">
        <div className="main-section1">
          <div className="page-header">
            <h1>Saved</h1>
            <span>Titles you've saved.</span>
          </div>
          <div className="saved-items-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
