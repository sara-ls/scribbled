import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { faUserCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      loggedIn: !!nextProps.currentUser,
      showMenu: prevState.showMenu
    }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    let navbarTools = null;
    if (this.props.currentUser) {
      navbarTools = (
        <div className="user-menu-btn" onClick={this.toggleMenu}>
          <div className="user-btns">
            <FontAwesomeIcon
              id="user-icon"
              className="user-icon"
              icon={faUserCircle}
            />
            <FontAwesomeIcon id="down-arrow-icon" icon={faAngleDown} />
          </div>
          {this.state.showMenu ? (
            <div className="dropdown-content">
              <ul className="dropdown-list">
                <li className="greeting">
                  Hi, {this.props.currentUser.full_name}!
                </li>
                {/* <li>Account Settings</li> */}
                <li>
                  <button className="signout-btn" onClick={this.props.logout}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      );
    } else {
      navbarTools = (
        <div className="navbar-tools">
          <button className="demo-signin-btn" onClick={this.props.demoLogin}>
            Demo User Login
          </button>
          <button
            className="signin-btn"
            onClick={() => this.props.openModal("login")}
          >
            Sign In
          </button>
        </div>
      );
    }

    return (
      <nav className="navbar">
        <div className="nav-items-container">
          <Link to="/">
            <div className="logo-container">
              <img alt="Scribbled" className="logo-img" src={window.logoURL} />
            </div>
          </Link>
          {navbarTools}
        </div>
        <div className="color-divider-line"></div>
      </nav>
    );
  }
}

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()).then(() => ownProps.onSuccess(false)),
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: () =>
    dispatch(
      login({ email: "demo@demo.demo", password: "demopassword" })
    ).then(() => ownProps.onSuccess(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
