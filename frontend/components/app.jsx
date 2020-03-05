import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import SideBar from "./ui/sidebar";
// import {
//   AuthRoute, //   ProtectedRoute
// } from '../util/route_util'
import SessionForm from "./session_form/session_form";
import Home from "./home/home";
import LoginForm from "./session_form/login_form_container";
import SignupForm from "./session_form/signup_form_container";
import Modal from "./ui/modal";
import { openModal, closeModal } from "../actions/modal_actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: window.store.entities.users
    };

    window.modalRef = React.createRef();
    this.scrollToModal = this.scrollToModal.bind(this);
  }

  scrollToModal(e) {
    // scroll to form
    window.scrollTo(0, window.modalRef.current.offsetTop);
  }

  render() {
    let mainContent;
    let currentUser = window.store.entities.users[window.store.session.id];
    if (currentUser) {
      mainContent = <SideBar show={true} />;
    } else {
      mainContent = <Home scrollToModal={this.scrollToModal} />;
    }

    let sessionForm = (
      <LoginForm
        id="form"
      />
    );

    return (
      <div className="app">
        <NavBar scrollToModal={this.scrollToModal} />
        <div ref={window.modalRef}></div>
        <Modal id="form" />
        {/* {sessionForm} */}
        <div className="main-section">
          <div className="main-content">{mainContent}</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
