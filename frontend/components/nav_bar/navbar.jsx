import React from "react";
import { Link } from "react-router-dom";

// import icons
import { faUserCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    //openModal prop
    this.state = {
      showMenu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    if (this.state.showMenu) {
      this.setState({
        showMenu: false
      });
    } else {
      this.setState({
        showMenu: true
      });
    }
  }

  render() {
    let navbarTools;
    let currentUser = this.props.currentUser;
    if (currentUser) {
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
                <li className="greeting">Hi, {currentUser.full_name}</li>
                {/* <li>Account Settings</li> */}
                <li>
                  <button className="signout-btn" onClick={this.props.logout}>Sign Out</button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      );
    } else {
      navbarTools = (
        <button className="signin-btn" onClick={this.props.openModal}>
          Sign In
        </button>
      );
    }

    return (
      <nav className="navbar">
        <div className="nav-items-container">
          <div className="logo-container">
            <Link to="/"><img
              alt="Scribbled"
              className="logo-img"
              src="assets/scribbled-logo.png"
            /></Link>
          </div>
          {navbarTools}
        </div>
        <div className="color-divider-line">
          <div className="color-div seafoam"></div>
          <div className="color-div teal-dark"></div>
          <div className="color-div teal-light"></div>
          <div className="color-div midnight"></div>
          <div className="color-div wine"></div>
          <div className="color-div yellow"></div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
