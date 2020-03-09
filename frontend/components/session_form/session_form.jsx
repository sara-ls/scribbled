import React from "react";
import {
  faTimes,
  faAngleLeft,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      full_name: ""
      // , checked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateChecked = this.updateChecked.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  // updateChecked(e) {
  //   this.setState({
  //     checked: !this.state.checked
  //   });
  // }

  handleSubmit(clicked) {
    return e => {
      if (e.which === 13 || clicked) {
        e.preventDefault();
        this.props.processForm(Object.assign({}, this.state));
      }
    };
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {this.props.errors.slice(0, 3).map((error, i) => (
          <li key={`error-${i}`} className="err">
            <FontAwesomeIcon icon={faExclamationCircle} id="error-icon" />
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let rightFooter;
    let nameInput = null;
    let updatesCheckbox = null;
    if (this.props.formType === "login") {
      rightFooter = "New to Scribbled?";
    } else {
      rightFooter = "Already have an account?";
      nameInput = (
        <div className="input-container">
          <label>Name</label>
          <input
            type="text"
            value={this.state.full_name}
            onChange={this.update("full_name")}
            className="login-input"
            autoComplete="off"
            onKeyPress={this.handleSubmit(false)}
          />
        </div>
      );

      // updatesCheckbox = (
      //   <div className="checkbox-container">
      //
      //     <div className="checkbox-wrapper">
      //       <input
      //         id="checkbox-input"
      //         type="checkbox"
      //         className="login-input"
      //         checked={this.state.checked}
      //         onChange={this.updateChecked}
      //       />
      //       <span className="checkmark"></span>
      //       <span className="checkbox-label">
      //         Send me updates from Scribbled
      //       </span>
      //     </div>
      //   </div>
      // );
    }

    return (
      <div className="modal-container" id="modal">
        <div id="overlay"></div>
        <div className="login-form-container">
          <div className="login-form-box">
            <div className="left-col">
              <img alt="Scribbled" className="logo-img" src={window.logoURL} />
              <span className="welcome">
                {this.props.formType === "login" ? "Welcome back!" : ""}
              </span>
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
              <div className="form-title">
                {this.props.formType === "login" ? "Sign In" : "Sign Up"} with
                Email
              </div>
              <div className="errors-container">{this.renderErrors()}</div>
              <form onSubmit={this.handleSubmit(true)} className="login-form">
                <div className="login-form">
                  {nameInput}
                  <div className="input-container">
                    <label>Email</label>
                    <input
                      id="email-input"
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      className="login-input"
                      autoComplete="off"
                      onKeyPress={this.handleSubmit(false)}
                    />
                  </div>
                  <div className="input-container">
                    <label>
                      Password
                      <p className="password-length">
                        {this.props.formType === "signup"
                          ? "(at least 6 characters)"
                          : null}
                      </p>
                    </label>

                    <input
                      type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="login-input"
                      autoComplete="off"
                      onKeyPress={this.handleSubmit(false)}
                    />
                  </div>
                  {updatesCheckbox}

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
