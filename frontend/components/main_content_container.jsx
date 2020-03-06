import React from "react";
import { connect } from "react-redux"
import Splash from "./splash_page/splash";
import SideBar from './ui/sidebar'
import Featured from './home/featured'

const MainContent = (props) => {
  let component;
  let currentUser = window.store.entities.users[window.store.session.id];
  if (currentUser) {
    component = (
      <div>
        <SideBar showSidebar={true} />
        <Featured />
      </div>
    
    )
  } else {
    component = <Splash scrollToModal={props.scrollToModal} />;
  }

  return (
    <div className="main-content">
      {component}
    </div>
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
