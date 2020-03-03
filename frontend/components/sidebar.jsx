import React from 'react'
import {
  Link
} from 'react-router-dom'

class SideBar extends React.Component {
  render() {
    return (
      <aside>
        <div className="sidebar-content">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li></li> */}
          </ul>
        </div>
      </aside>
    )
  }
}

export default SideBar