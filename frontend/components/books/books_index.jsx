import React from "react";
import { connect } from "react-redux";
import SideBar from "../ui/sidebar";
import Featured from "../shared/featured";

class BookIndex extends React.Component {

  render() {
    let items = null;
    return (
      <div className="main-component-container">
        <SideBar showSidebar={true} />
        <div className="main-component">
          
          <section className="main-section1">
            <div className="page-header">
              <h1>Books</h1>
              <span>Find your next favorite book</span>
            </div>
            <div className="documents-items-container">{items}</div>
          </section>
          <Featured />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
