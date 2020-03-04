import React from 'react'
import {
  Link
} from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home-container">
        <img src="assets/splash.jpg" />
        <div className="home-content-box"> 
          <div className="home-content">
            <span>Thousands of the best books, audiobooks, and more. All in one app.</span>          
            <button className="signup-btn" onClick={this.props.openModal}>
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home