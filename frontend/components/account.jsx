import React from "react";
import { fetchCurrentUser } from "../actions/user_actions";

import { connect } from "react-redux";
import SideBar from "./ui/sidebar";

const Account = ({ user: { full_name, email, uploadedDocIds } }) => {
  return (
    <div className="main-component-container">
      <SideBar showSidebar={true} />
      <div className="main-component">
        <div className="main-section1">
          <div className="page-header">
            <h1>Your Account</h1>
          </div>
          <div>
            <div>
              <label>Name</label>
              <span>{full_name}</span>
            </div>
            <div>
              <label>Email</label>
              <span>{email}</span>
            </div>
            <div>
              <label>Your Uploaded Docs</label>
              <span>{uploadedDocIds}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ entities, session }) => ({
  user: entities.users[session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCurrentUser: () => {
      dispatch(fetchCurrentUser);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
