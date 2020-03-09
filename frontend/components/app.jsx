import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./ui/modal";
import Splash from "./splash_page/splash";
import Home from "./home/home";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Modal id="form" />
        <div className="main-section">
          <div className="main-content">
            <Switch>
              {/* Render Splash page as main content component if logged out */}
              <AuthRoute exact path="/splash" component={Splash} />
              {/* Render Splash page as main content component if logged in */}
              <ProtectedRoute exact path="/" component={Home} />
              <Redirect path="*" to="/" />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
