import React from "react";
import { faTimes, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SessionForm extends React.Component {
  constructor(props) {
    // show, openModal, hideModal --- props
    super(props);
    this.state = {
      email: "",
      password: "",
      full_name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state));
    this.props.hideModal();
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    let rightFooter;
    let nameInput = null;
    if (this.props.formType === "login") {
      rightFooter = "New to Scribbled?";
    } else {
      rightFooter = "Already have an account?";
      nameInput = (
        <div>
          <br />
          <label>Name</label>
          <input
            type="text"
            value={this.state.full_name}
            onChange={this.update("full_name")}
            className="login-input"
            autoComplete="off"
          />
        </div>
      );
    }

    return (
      <div className="modal-container" id="modal">
        <div id="overlay"></div>
        <div className="login-form-container">
          <div className="login-form-box">
            <div className="left-col">
              <img alt="Scribbled" className="logo-img" src={window.logoURL} />
            </div>
            <div className="right-col">
              <div className="form-top">
                <div className="form-top-btns">
                  <div className="back-btn-container">
                    {/* <FontAwesomeIcon id="modal-icon" icon={ faAngleLeft } />
                    <span>Back</span> */}
                  </div>
                  <button className="close-btn" onClick={this.props.closeModal}>
                    <FontAwesomeIcon
                      id="modal-icon"
                      icon={faTimes}
                      color="grey"
                    />
                  </button>
                </div>
              </div>
              <div className="form-title">Sign In with Email</div>
              <form onSubmit={this.handleSubmit} className="login-form">
                {/* {this.renderErrors()} */}
                <div className="login-form">
                  {nameInput}
                  <br />
                  <label>Email</label>
                  <input
                    id="email-input"
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="login-input"
                    autoComplete="off"
                  />
                  <br />
                  <label>Password</label>
                  {this.props.formType === "signup"
                    ? "<label>(at least 6 characters)</label>"
                    : null}
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                    autoComplete="off"
                  />
                  <br />
                  <button className="session-submit submit-btn" type="submit">
                    {this.props.formType === "login" ? "Sign In" : "Sign Up"}
                  </button>
                </div>
              </form>
              <div className="right-footer-container">
                <span className="footer-text">{rightFooter}</span>
                {this.props.otherForm}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
