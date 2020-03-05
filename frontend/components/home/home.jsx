import React from "react";
import { Link } from "react-router-dom";
import TopBooks from "./top_books";
import HomeTopPanel from "./home_top_panel";
import Offerings from "./offerings";
import HomeSimplePanel from "./home_simple_panel";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <HomeTopPanel openModal={this.props.openModal} />
        <Offerings />
        <TopBooks />
        <HomeSimplePanel openModal={this.props.openModal} />
      </div>
    );
  }
}

export default Home;
