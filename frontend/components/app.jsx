import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./ui/modal";
import Splash from "./splash_page/splash";
import Home from "./home/home";
import DocumentIndex from "./documents/documents_index";
import BookIndex from "./books/books_index";
import TopCharts from "./books/top_charts";
import Saved from "./saved/saved";
import LoginForm from "./session_form/login_form_container";
import SignupForm from "./session_form/signup_form_container";

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
              {/* Render Home page as main content component if logged in */}
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/saved" component={Saved} />
              <Route exact path="/documents" component={DocumentIndex} />
              <Route exact path="/books" component={BookIndex} />
              <Route exact path="/topcharts" component={TopCharts} />
              {/* Auto redirect given bad path */}
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
