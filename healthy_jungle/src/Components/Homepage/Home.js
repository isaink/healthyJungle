import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './../../styles/home.css';
import Checkbox from './CheckBoxes'
import Searchbar from  './Searchbar';
// import Recipes from './../RecipesPage/Recipes';
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
     const cal_dietUrl = `https://api.edamam.com/search?q=&app_id=${apiId}&app_key=${apiKey}&diet=${this.state.diet}&from=0&to=25&calories=${this.state.calories}&limit=20`
     axios.get(cal_dietUrl)
       .then((res)=> {
         this.setState({
           calorie_dietRecipes: res.data.hits
         })
       })

  };

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
    const { buttonText, searchInput,refineSearch, calorie_dietRecipes, recipeOptionTypedIn  } = this.state;

    return(
      <>
        <div className='ctnr_home' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
          <div className='welcome_msg'>
              <div className='welcoming'> 
                <p className='inner_ctnr'> <b id='quotes'>"</b> Your next recipe is just lion around the corner <b id='quotes'>"</b>  <br/> <p id='flecha'> → </p> </p>
              </div>
          </div>

              <Searchbar searchInput={searchInput} handleChange={this.handleChange} findRecipe={this.findRecipe} getRecipes={this.getRecipes} recipeOptionTypedIn={recipeOptionTypedIn}/>

            
                <p onClick={this.toggleOptions} className='refined_search'>REFINE SEARCH BY :</p>
                <div className='options'>
                {refineSearch 
                  ? <Checkbox allChange={this.allChange} onSumbit={this.onSumbit} buttonText={buttonText} calorie_dietRecipes={calorie_dietRecipes}/> 
                  : null 

                }

            </div>

        </div>
      </>
    )
  }

};


export default withRouter(Home);
