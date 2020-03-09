import React from "react";
import SideBar from "../ui/sidebar"

const Saved = () => {
  return (
    <div className="documents-container">
      <SideBar showSidebar={true} />
      <div className="documents-inner-container">
        <section className="doc-index-section1">
          <div className="documents-header">
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
