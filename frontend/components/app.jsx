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

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        {/* <Route exact path="/" component={} /> */}
      </Switch>
    </div>
  )
}

export default App;