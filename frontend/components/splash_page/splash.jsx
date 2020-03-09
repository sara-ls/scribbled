import React from "react";
import TopBooks from "./top_books";
import HomeTopPanel from "./splash_top_panel";
import Offerings from "./offerings";
import HomeSimplePanel from "./simple_panel";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";

const Splash = ({openModal}) => {
    return (
      <div className="home-container">
        <HomeTopPanel openModal={openModal} />
        <Offerings />
        <TopBooks />
        <HomeSimplePanel openModal={openModal} />
      </div>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(null, mapDispatchToProps)(Splash);