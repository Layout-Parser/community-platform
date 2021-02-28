import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const routing = (
  <Router>
    <div>
      <Route exact path="/community-platform" component={App}/>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))