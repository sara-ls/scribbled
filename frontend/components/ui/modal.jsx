import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginForm from "../user_session/login_form_container";
import SignupForm from "../user_session/signup_form_container";

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component = null;
  switch (modal) {
    case "login":
      component = <LoginForm id="form" />;
      break;
    case "signup":
      component = <SignupForm id="form" />;
      break;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
