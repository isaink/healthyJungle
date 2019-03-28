import React, { Component } from 'react';
import './../../styles/home.css';
import Checkbox from './CheckBoxes'
import Searchbar from  './Searchbar';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
let bg = require('./../../img/vector-banana-leaf-background.jpg');
const {apiId, apiKey} = require('../../secrets.js')

class Home extends Component {
  constructor(){
    super()
    this.state = {
      diet: '',
      calories: '',
      searchInput: '',
      allRecipes: [],
      recipeOptionTypedIn: [],
      buttonText: "Done",
      calorie_dietRecipes: [],
      refineSearch: false,
      }
    };

  allChange = (e) => {
     this.setState({[e.target.name]:e.target.value , buttonText: "Find"})
  }

  onSumbit = (e) => {
    e.preventDefault()


     const cal_dietUrl = `https://api.edamam.com/search?q=&app_id=${apiId}&app_key=${apiKey}&calories=${this.state.calories}&diet=${this.state.diet}`

     axios.get(cal_dietUrl)
       .then((res)=> {
         this.setState({
           calorie_dietRecipes: res.data
         })
       })

  };

  componentDidMount() {
    this.getRecipes()
  }

  getRecipes = () => {
    const url = `https://api.edamam.com/search?q=${this.state.searchInput}&app_id=${apiId}&app_key=${apiKey}`

      axios.get(url)
        .then((res)=> {
          this.setState({
            calorie_dietRecipe: res.data
          })
        })
        .catch(err => {
          return Error
        })

  };

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  findRecipe = () => {
    let recipeSearch = this.state.allRecipes.filter(recipe => {
      console.log(recipe);
      if(recipe.hits.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
        return true
      } else {
        return false
      }
    })

    if(recipeSearch) {
      this.setState({
        recipeOptionTypedIn: recipeSearch,
        searchInput: ''
      })

    } else {
      return <p>Not found</p>
    }


    if(this.state.recipeOptionTypedIn) {
      return <Redirect to='/allrecipes/filter' />
    } else {
      return null
    }

  };

  toggleOptions = () => {
    this.setState({
      refineSearch: true
    })
  }


  render(){

    return(
      <>
        <div className='ctnr_home' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
          <div className='welcome_msg'>
            <p>Your next recipe is just  <br/> lion around the corner</p>
          </div>
              <Searchbar searchInput={this.state.searchInput} handleChange={this.handleChange} findRecipe={this.findRecipe} getRecipes={this.getRecipes} recipeOptionTypedIn={this.state.recipeOptionTypedIn}/>

            <div className='options'>
                <p onClick={this.toggleOptions}>REFINE SEARCH BY</p>

                {this.state.refineSearch
                  ? <Checkbox allChange={this.allChange} onSumbit={this.onSumbit} buttonText={this.state.buttonText}/>
                  : null
                }

            </div>

        </div>
      </>
    )
  }
}

export default Home;
