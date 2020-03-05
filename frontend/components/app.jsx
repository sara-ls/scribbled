import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
// import {
//   AuthRoute, //   ProtectedRoute
// } from '../util/route_util'
import MainContent from './main_content_container'
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
    window.scrollTo(0, window.modalRef.current.offsetTop);
  }

  render() {
    return (
      <div className="app">
        <NavBar scrollToModal={this.scrollToModal} />
        <div ref={window.modalRef}></div>
        <Modal id="form" />
        <div className="main-section">
          <MainContent scrollToModal={this.scrollToModal} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
