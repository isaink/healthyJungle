import React, { Component } from 'react';
import Home from './Components/Homepage/Home';
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );


  }
}

export default App;
