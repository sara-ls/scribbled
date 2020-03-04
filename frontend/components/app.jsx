import React from 'react';
import {
  Provider
} from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'
import NavBar from './nav_bar/navbar_container'
import Footer from './footer'
import SideBar from './sidebar'
// import {
//   AuthRoute,
//   ProtectedRoute
// } from '../util/route_util'
import SessionForm from './session_form/session_form'
import Home from './home'
import LoginForm from './session_form/session_form_container'
import SignupForm from './session_form/signup_form_container'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showSidebar: (window.store.entities.users )
    }

    this.openModal = this.openModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  openModal(e) {
    this.setState({
      showModal: true
    })
  }

  hideModal(e) {
    this.setState({
      showModal: false
    })
  }

  render() {
    let mainContent 

    let currentUser = window.store.entities.users[window.store.session.id];
    if (currentUser) {
      mainContent = (
        <SideBar show={true} />
      )
    } else {
      mainContent = (
        <Home openModal={this.openModal} />
      )
    }

    let sessionForm = ( 
      <LoginForm
        show={this.state.showModal} 
        openModal={this.openModal} 
        hideModal={this.hideModal}
      /> 
    )

    return (
      <div className="app">
        <NavBar openModal={ this.openModal } />
        <div className="modal-container">
          {sessionForm}
        </div>
        <div className="main-section">
          <div className="main-content">
            {mainContent}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;