import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Select from './components/Select/index';
import Top from './components/Top/index';
import Google from './components/Google/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Select />
        </div>
        <body>
          <Switch>
            <Route exact path='/' component={ Top } />
            <Route exact path='/google' component={ Google } />
          </Switch>
        </body>
      </div>
    );
  }
}

export default App;
