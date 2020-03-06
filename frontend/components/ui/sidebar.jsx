import React from 'react'
import {
  Link
} from 'react-router-dom'

class SideBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.showSidebar) {
      return (
        <aside className="sidebar">
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
    } else {
      return null
    }
  }
}

export default SideBar