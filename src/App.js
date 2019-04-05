import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Select from './components/Select/select';
import Top from './components/Top/top';
import Google from './components/Google/google';
import Fps from './components/Fps/fps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Select />
        <body>
          <Switch>
            <Route exact path='/' component={ Top } />
            <Route exact path='/google' component={ Google } />
            <Route exact path='/fps' component={ Fps } />
          </Switch>
        </body>
      </div>
    );
  }
}

export default App;
