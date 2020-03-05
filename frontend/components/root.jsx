import React from 'react'
import { Provider } from 'react-redux'
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import App from './app'

const Root = ({store}) => {
  
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/"  component={App} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default Root