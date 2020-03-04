import React from "react";
import { faTimes, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SessionForm extends React.Component {
  constructor(props) {
    // show, openModal, hideModal --- props
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.switchFormType = this.switchFormType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  switchFormType(e) {
    if (this.props.formType === 'login') {
      this.props.formType = 'signup'
    } else {
      this.props.formType = 'login'
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.hideModal();
    this.props.currentUser = user;
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
    if (this.props.formType === "login") {
      rightFooter = "New to Scribbled?";
    } else {
      rightFooter = "Already have an account?";
    }

    if (this.props.show) {
      return (
        <div className="login-form-container">
          <div className="login-form-box">
            <div className="left-col">
              <img
                alt="Scribbled"
                className="logo-img"
                src="assets/scribbled-logo.png"
              />
            </div>
            <div className="right-col">
              <div className="form-top">
                <div className="form-top-btns">
                  <div className="back-btn-container">
                    {/* <FontAwesomeIcon id="modal-icon" icon={ faAngleLeft } />
                    <span>Back</span> */}
                  </div>
                  <button className="close-btn" onClick={this.props.hideModal}>
                    <FontAwesomeIcon id="modal-icon" icon={faTimes} />
                  </button>
                </div>
              </div>

              <div className="form-title">Sign In with Email</div>
              <form onSubmit={this.handleSubmit} className="login-form">
                {/* {this.renderErrors()} */}
                <div className="login-form">
                  <br />
                  <label>Email</label>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="login-input"
                  />
                  <br />
                  <label>Password</label>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                  />
                  <br />
                  <button className="session-submit submit-btn" type="submit">
                    {this.props.formType === "login" ? "Sign In" : "Sign Up"}
                  </button>
                </div>
              </form>
              <div className="right-footer-container">
                <span className="footer-text">{rightFooter}</span>
                <button className="alt-btn" onClick={this.switchFormType}>
                  {this.props.formType === "login" ? "Sign Up" : "Sign In"}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SessionForm;
