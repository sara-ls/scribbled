import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-items-container">
          <div className="logo-container">
            <img 
              alt="Scribbled"
              className="logo-img"
              src="https://s-f.scribdassets.com/images/landing/home2_landing/scribd_logo_horiz_small.svg?0c87b4bda"
            />
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