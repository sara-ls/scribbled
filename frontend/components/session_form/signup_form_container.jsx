import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <button className="other-form" onClick={() => dispatch(openModal("login"))}>Log In</button>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
