import { connect } from "react-redux";
import React from "react";
import { login, clearSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ session, entities: { users }, errors }) => {
  return {
    currentUser: users[session.id],
    formType: "login",
    errors: errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user)).then(() => ownProps.onSuccess()),
    demoLogin: () =>
      dispatch(login({ email: "demo@demo.demo", password: "demopassword" })),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
      <button
        className="other-form"
        onClick={() => dispatch(openModal("signup"))}
      >
        Sign Up
      </button>
    ),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
