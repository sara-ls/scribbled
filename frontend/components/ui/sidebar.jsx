import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScribd } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookOpen, faChartLine } from "@fortawesome/free-solid-svg-icons";

class SideBar extends React.Component {
  render() {
    if (this.props.showSidebar) {
      return (
        <aside className="sidebar">
          <ul className="sidebar-content">
            <li className="sidebar-row">
              <NavLink
                exact
                to="/"
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
                exact
                to="/saved"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="social-icon icon"
                  id="saved-icon"
                />
                Saved
              </NavLink>
            </li>
            <li className="sidebar-div">
              <div className="sidebar-div">
              </div>
            </li>
            <li className="sidebar-row">
              <NavLink
                exact
                to="/topcharts"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="social-icon icon"
                  id="scribd-icon-side"
                />
                Top Charts
              </NavLink>
            </li>
            <li className="sidebar-row">
              <NavLink
                to="/books"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="icon"
                  id="book-icon-side"
                />
                Books
              </NavLink>
            </li>
            {/* <li className="sidebar-row">
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
            </li> */}
          </ul>
        </aside>
      );
    } else {
      return null;
    }
  }
}

export default SideBar;
