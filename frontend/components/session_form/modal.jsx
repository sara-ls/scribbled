import React from "react";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal) {
    case "login":
      component = <LoginFormContainer id="form"/>;
      break;
    case "signup":
      component = <SignupFormContainer id="form" />;
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

export default Modal;
