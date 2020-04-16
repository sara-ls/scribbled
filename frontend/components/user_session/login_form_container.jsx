import { connect } from "react-redux";
import React from "react";
import {
  login,
  clearSessionErrors,
  logout,
} from "../../actions/session_user_actions";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ session, entities: { users }, errors }) => ({
  currentUser: users[session.id],
  formType: "login",
  errors: errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
  demoLogin: () =>
    dispatch(login({ email: "demo@demo.demo", password: "demopassword" })).then(
      () => {
        setTimeout(() => {
          alert("Your demo user session has expired. Please log in again.");
          dispatch(logout());
        }, 600000);
      }
    ),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
    <button
      className="other-form"
      onClick={() => dispatch(openModal("signup"))}
    >
      Sign Up
    </button>
  ),
  clearErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
