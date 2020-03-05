import React from "react";
import TopBooks from "./top_books";
import HomeTopPanel from "./home_top_panel";
import Offerings from "./offerings";
import HomeSimplePanel from "./home_simple_panel";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <HomeTopPanel openModal={this.props.openModal} />
        <Offerings />
        <TopBooks />
        <HomeSimplePanel openModal={this.props.openModal} />
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