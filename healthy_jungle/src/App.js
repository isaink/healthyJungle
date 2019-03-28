import './App.css';
import React, { Component } from 'react';
import Home from './Components/Homepage/Home';
import Recipes from './Components/RecipesPage/Recipes'
import axios from 'axios'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
const {apiId, apiKey} = require('./secrets.js')

class App extends Component {

  state = {
    allRecipes: [],
    calorie_dietRecipes: [],
    searchInput: '',
    diet: '',
    calories: '',
    buttonText: "Done",
    refineSearch: false
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  allChange = (e) => {
     this.setState({[e.target.name]:e.target.value , buttonText: "Find"})
  }

  toggleOptions = () => {
    this.setState({
      refineSearch: true
    })
  }

  componentDidMount() {
    this.getRecipes()
  }

  getRecipes = () => {
    const url = `https://api.edamam.com/search?q=${this.state.searchInput}&app_id=${apiId}&app_key=${apiKey}&from=0&to=25`

      axios.get(url)
        .then((res)=> {
          this.setState({
            allRecipes: res.data.hits
          })
        })

      this.setState({
        submitted: true
      })

  };

  onSumbit = (e) => {
    e.preventDefault()


     const cal_dietUrl = `https://api.edamam.com/search?q=&app_id=${apiId}&app_key=${apiKey}&diet=${this.state.diet}&from=0&to=25&calories=${this.state.calories}`

     axios.get(cal_dietUrl)
       .then((res)=> {
         this.setState({
           calorie_dietRecipes: res.data.hits
         })
       })

  };

  render() {

    return (
      <div className="App" >
          <header className='app_name'>
            <h1>HEALTHY JUNGLE</h1>
          </header>

        <Switch>
          <Route exact path='/'
            render={() => {
              if (this.state.allRecipes.length || this.state.calorie_dietRecipes.length){
                return <Redirect to="/allrecipes/filter" component={Recipes}/>
              }
              return (
                <Home getRecipes={this.getRecipes} handleChange={this.handleChange} searchInput={this.state.searchInput} allChange={this.allChange} diet={this.state.diet} calories={this.state.calories} refineSearch={this.state.refineSearch} buttonText={this.state.buttonText} toggleOptions={this.toggleOptions} onSumbit={this.onSumbit}/>
              )
             }
           }
          />

          <Route path='/allrecipes/filter' render={() => {
            if (this.state.allRecipes)
            return (<Recipes allRecipes={this.state.allRecipes} calorie_dietRecipes={this.state.calorie_dietRecipes} />) }} />
        </Switch>
      </div>
    );


  }
}

export default withRouter(App);
