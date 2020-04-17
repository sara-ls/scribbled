import React from "react";
import { connect } from "react-redux";
import { fetchSavesForUser, deleteSave } from "../../../actions/save_actions";
import SideBar from "../../ui/sidebar";
class Saved extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSavesForUser();
  }

  render() {
    return (
      <div className="main-component-container">
        <SideBar showSidebar={true} />
        <div className="main-component">
          <div className="main-section1">
            <div className="page-header">
              <h1>Saved</h1>
              <span>Titles you've saved.</span>
            </div>
            <div className="saved-items-container"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.id,
    saves: Object.values(state.entities.saves)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSavesForUser: () => dispatch(fetchSavesForUser()),
    deleteSave: (saveId) => dispatch(deleteSave(saveId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
