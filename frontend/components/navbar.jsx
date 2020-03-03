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
            <div className="user-menu-btn">
              <div className="user-btns">
                <FontAwesomeIcon id="user-icon" className="user-icon" icon={faUserCircle} />
                <FontAwesomeIcon id="down-arrow-icon" icon={faAngleDown} />
              </div>
            </div>
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