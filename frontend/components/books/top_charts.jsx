import React from "react";
import { connect } from "react-redux";
import SideBar from "../ui/sidebar";

class Bestsellers extends React.Component {
  render() {
    let items = null;
    return (
      <div className="documents-container">
        <SideBar showSidebar={true} />
        <div className="documents-inner-container">
          <section className="doc-index-section1">
            <div className="documents-header">
              <h1>Top Charts</h1>
              <span>
                The most popular books and audiobooks that are topping
                bestseller lists and generating buzz from critics.
              </span>
            </div>
            <div className="documents-items-container">{items}</div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Bestsellers);
