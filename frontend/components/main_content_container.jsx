import React from "react";
import { connect } from "react-redux"
import Home from "./home/home";
import SideBar from './ui/sidebar'

const MainContent = (props) => {
  let component;
  let currentUser = window.store.entities.users[window.store.session.id];
  if (currentUser) {
    component = <SideBar show={true} />;
  } else {
    component = <Home scrollToModal={props.scrollToModal} />;
  }

  return (
    <div className="main-content">{component}</div>
  );
};

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
