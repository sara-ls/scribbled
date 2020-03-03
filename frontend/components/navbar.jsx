import React from 'react'
import { Link } from 'react-router-dom'

// import icons
import {
  faUserCircle, faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(event) {
    if (this.state.showMenu) {
      this.setState({
        showMenu: false,
      })
    } else {
      this.setState({
        showMenu: true,
      })
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-items-container">
          <div className="logo-container">
            <img 
              alt="Scribbled"
              className="logo-img"
              src = "assets/scribbled-logo.png"
            />
          </div>
          <div className="navbar-tools">
            <div className="user-menu-btn" onClick={this.toggleMenu}>
              <div className="user-btns">
                <FontAwesomeIcon 
                  id="user-icon" 
                  className="user-icon" 
                  icon={faUserCircle} 
                />
                <FontAwesomeIcon id="down-arrow-icon" icon={faAngleDown} />
              </div>
            </div>
            {
              this.state.showMenu ? 
              (
                <div className="dropdown-content">
                  <ul className="dropdown-list">
                    <li>Hi</li> 
                    <li><Link>Account Settings</Link></li>
                    <li><Link>Sign Out</Link></li>
                  </ul>
                </div>
              ) 
              : 
              ( null )
            }
          </div>
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
    )
  }
}

export default NavBar