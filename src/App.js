import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Select from './components/Select/select';
import Top from './components/Top/top';
import Google from './components/Google/google';
import Threed from './components/Threed/threed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <Switch>
            <Route exact path='/' component={ Top } />
            <Route exact path='/google' component={ Google } />
            <Route exact path='/threed' component={ Threed } />
          </Switch>
        </body>
        <Select />
      </div>
    );
  }
}

export default App;
