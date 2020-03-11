import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import {
  faUserCircle,
  faAngleDown,
  faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
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
        <div className="navbar-tools">
          <div className="upload-btn-container">
            <NavLink to="/upload" activeClassName="hidden active-nav-link">
              <FontAwesomeIcon
                id="upload-icon"
                className="upload-icon"
                icon={faArrowCircleUp}
              />
              <span>Upload</span>
            </NavLink>
          </div>
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
                  <li>
                    <Link className="dropdown-btn" to="/account">
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-btn" to="/upload">
                      Document Uploads
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-btn signout-btn"
                      onClick={this.props.logout}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
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
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: () =>
    dispatch(login({ email: "demo@demo.demo", password: "demopassword" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
