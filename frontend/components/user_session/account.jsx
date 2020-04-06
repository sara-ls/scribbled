import React from "react";
import { fetchCurrentUser } from "../../actions/session_user_actions";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import SideBar from "../ui/sidebar";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchCurrentUser();
    setTimeout(
      () =>
        this.setState({
          loading: false
        }),
      900
    );
  }

  render() {
    const override = css`
      display: block;
      margin: 10px auto;
      border-color: white;
    `;

    if (this.state.loading) {
      return (
        <div className="main-component-container">
          <SideBar showSidebar={true} />
          <div className="loading">
            <BounceLoader
              css={override}
              size={50}
              color={"#1a7d88"}
              loading={this.state.loading}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="main-component-container">
        <SideBar showSidebar={true} />
        <div className="main-component">
          <div className="account-banner">
            <div>
              <div className="banner-icon">
                <FontAwesomeIcon
                  id="user-icon"
                  className="user-icon"
                  icon={faUserCircle}
                />
              </div>
              <div className="banner-name">{this.props.user.full_name}</div>
            </div>
          </div>
          <div className="main-section1">
            <div className="page-header">
              <h1>Your Account</h1>
            </div>
            <div className="account-info-container">
              <div>
                <label>Name</label>
                <span>{this.props.user.full_name}</span>
              </div>
              <div>
                <label>Email</label>
                <span>{this.props.user.email}</span>
              </div>
              <div>
              <label>Your Uploaded Docs</label>
              <span>{this.props.user.uploadedDocIds}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities, session }) => ({
  user: entities.users[session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCurrentUser: () => {
      dispatch(fetchCurrentUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);