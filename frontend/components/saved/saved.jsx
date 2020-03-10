import React from "react";
import SideBar from "../ui/sidebar"

const Saved = () => {
  return (
    <div className="main-component-container">
      <SideBar showSidebar={true} />
      <div className="main-component">
        <section className="doc-index-section1">
          <div className="page-header">
            <h1>Saved</h1>
            <span>Titles you've saved.</span>
          </div>
          <div className="documents-items-container"></div>
        </section>
      </div>
    </div>
  );
};

export default Saved;
