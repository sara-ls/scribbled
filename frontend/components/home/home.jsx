import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import SideBar from "../ui/sidebar";
import Featured from "./featured";
import DocumentIndex from "../documents/documents_index";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <SideBar showSidebar={true} />
        <Featured />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
