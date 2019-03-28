import React, { Component } from 'react';
import Home from './Components/Homepage/Home.context';
import Recipes from './Components/RecipesPage/Recipes'
import { Switch, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
          <header className='app_name'>
            <h1>HEALTHY JUNGLE</h1>
          </header>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/allrecipes/filter' component={Recipes} />
        </Switch>
      </div>
    );


  }
}

export default App;
