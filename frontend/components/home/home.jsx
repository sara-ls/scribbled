import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";
import BooksIndex from "../files/books/books_index";

class Home extends React.Component {

  render() {
    return <BooksIndex />;
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
