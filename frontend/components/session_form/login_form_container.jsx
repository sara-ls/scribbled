import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    formType: "login"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    demoLogin: () =>
      dispatch(login({ email: "demo@demo.demo", password: "demopassword" })),
    otherForm: (
      <button
        className="other-form"
        onClick={() => dispatch(openModal("signup"))}
      >
        Sign Up
      </button>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
