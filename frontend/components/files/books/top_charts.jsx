import React from "react";
import { connect } from "react-redux";
import SideBar from "../../ui/sidebar";
import Featured from "../../shared/featured";
import TopChartItem from "./top_chart_item";

class TopCharts extends React.Component {
  componentDidMount() {}

  render() {
    // let listItems = this.props.map()

    return (
      <div className="main-component-container">
        <SideBar showSidebar={true} />
        <div className="main-component">
          <div className="main-section1">
            <div className="page-header">
              <h1>Top Charts</h1>
              <span>
                The most popular books and audiobooks that are topping
                bestseller lists and generating buzz from critics.
              </span>
            </div>
          </div>{" "}
          <div className="main-section2">
            {/* <ol className="top-charts-list">
              {listItems}
            </ol> */}
          </div>
          <Featured />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TopCharts);
