import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

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
    } else { this.setState({
        showMenu: true
      });
    } }

  render() {
    let sessionLinks;
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
        <button className="signin-btn" onClick={() => {
          this.props.openModal("login")
          this.props.scrollToModal()
        }}>
          Sign In
        </button>
      );

      // sessionLinks = (
      //   <nav className="login-signup">
      //     <button
      //       className="signin-btn"
      //       onClick={() => this.props.openModal("login")}
      //     >
      //       Sign In
      //     </button> //     {/* <Link to="/login">Login</Link> */}
      //     {/* <Link to="/signup">Sign up!</Link> */}
      //   </nav>
      // );
    }

    return (
      <nav className="navbar">
        <div className="nav-items-container">
          <div className="logo-container">
            <Link to="/">
              <img alt="Scribbled" className="logo-img" src={window.logoURL} />
            </Link>
          </div>
          {navbarTools}
          {/* {sessionLinks} */}
        </div>
        <div className="color-divider-line"></div>
      </nav>
    );
  }
}

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
