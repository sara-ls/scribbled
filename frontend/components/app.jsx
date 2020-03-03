import React from 'react';
import {
  Provider
} from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBar from './navbar'
import Footer from './footer'
import SideBar from './sidebar'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="main-section">
        <SideBar />
        <div className="main-content">
          <Switch>
            {/* <Route exact path="/" component={} /> */}
          </Switch>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default App;