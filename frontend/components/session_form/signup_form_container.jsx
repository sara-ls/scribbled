import { connect } from "react-redux";
import React from "react";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
      <button
        className="other-form"
        onClick={() => dispatch(openModal("login"))}
      >
        Log In
      </button>
    ),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
