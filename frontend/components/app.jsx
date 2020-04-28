import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import loadable from "@loadable/component";

import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const Modal = loadable(() => import("./ui/modal"));
import Splash from "./splash";
const DocumentIndex = loadable(() => import("./files/documents/documents_index"));
import BookIndex from "./files/books/books_index";
const TopCharts = loadable(() => import("./files/books/top_charts"));
const Saved = loadable(() => import("./files/saved/saved"));

const UploadForm = loadable(() => import("./files/documents/upload"));
const Account = loadable(() => import("./user_session/account"));
// import Book from "./files/books/book_show";
import ScrollToTop from "./ui/scroll_top";

const Book = loadable(() => import("./files/books/book_show"));

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Modal id="form" />
        <ScrollToTop>
          <div className="main">
            <Switch>
              {/* Render Home page as main content component if logged in */}
              <ProtectedRoute exact path="/" component={BookIndex} />
              {/* Render Splash page as main content component if logged out */}
              <AuthRoute exact path="/splash" component={Splash} />
              <ProtectedRoute exact path="/books" component={BookIndex} />
              <ProtectedRoute exact path="/books/:id" component={Book} />
              <ProtectedRoute
                exact
                path="/documents"
                component={DocumentIndex}
              />
              <ProtectedRoute exact path="/topcharts" component={TopCharts} />
              <ProtectedRoute exact path="/saved" component={Saved} />
              <ProtectedRoute exact path="/upload" component={UploadForm} />
              <ProtectedRoute exact path="/account" component={Account} />
              {/* Default redirect given bad path */}
              <Redirect path="*" to="/books" />
            </Switch>

            <Footer />
          </div>
        </ScrollToTop>
      </div>
    );
  }
}

export default App;
