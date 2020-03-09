import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./ui/modal";
import Splash from './splash_page/splash';
import Home from './home/home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };

    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess(isLoggedIn) {
    if (window.store.session.id || isLoggedIn) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  render() {
    return (
      <div className="app">
        <NavBar onSuccess={this.onSuccess} loggedIn={this.state.loggedIn} />
        <Modal
          id="form"
          loggedIn={this.state.loggedIn}
          onSuccess={this.onSuccess}
        />
        <div className="main-section">
          <div className="main-content">
            <Switch>
              {/* Render Splash page as main content component if logged out */}
              <AuthRoute path="/splash" component={Splash} />
              {/* Render Splash page as main content component if logged in */}
              <ProtectedRoute path="/" component={Home} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
