import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <h1>Scribbled</h1>
      </HashRouter>
    </Provider>
  )
}

export default Root