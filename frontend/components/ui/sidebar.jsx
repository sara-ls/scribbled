import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScribd } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

class SideBar extends React.Component {
  render() {
    if (this.props.showSidebar) {
      return (
        <aside className="sidebar">
          <ul className="sidebar-content">
            <li className="sidebar-row">
              <NavLink
                exact to="/"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                <FontAwesomeIcon
                  icon={faScribd}
                  className="social-icon icon"
                  id="scribd-icon-side"
                />
                Home
              </NavLink>
            </li>
            <li className="sidebar-row">
              <NavLink
                to="/documents"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                <FontAwesomeIcon
                  icon={faFileAlt}
                  className="icon"
                  id="doc-icon-side"
                />
                Documents
              </NavLink>
            </li>
          </ul>
        </aside>
      );
    } else {
      return null;
    }
  }
}

export default SideBar;
