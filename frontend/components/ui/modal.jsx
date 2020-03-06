import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginForm from "../session_form/login_form_container";
import SignupForm from "../session_form/signup_form_container";

const Modal = ({ modal, closeModal, onSuccess }) => {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal) {
    case "login":
      component = <LoginForm id="form" onSuccess={onSuccess}/>;
      break;
    case "signup":
      component = <SignupForm id="form" onSuccess={onSuccess} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    onSuccess: ownProps.onSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
