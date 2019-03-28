import React, { Component } from 'react';
import './../../styles/home.css';
import Checkbox from './CheckBoxes'
import Searchbar from  './Searchbar';

import { Redirect } from 'react-router-dom';
import axios from 'axios';
let bg = require('./../../img/vector-banana-leaf-background.jpg');
const {apiId, apiKey} = require('../../secrets.js')

class Home extends Component {
  constructor(props){
    super(props)
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


     const cal_dietUrl = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=&app_id=${apiId}&app_key=${apiKey}&calories=${this.state.calories}&diet=${this.state.diet}`

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
  const url = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.state.searchInput}&app_id=${apiId}&app_key=${apiKey}`
  axios.get(url)
        .then(res =>{

          let searchRes = {...this.state}

         // searchRes.allRecipes = res.data.hits
         res.data.hits.forEach(info => { searchRes.allRecipes.push(info) })
         console.log(searchRes)
          this.setState(
           searchRes
        )
    })
  };

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  findRecipe = () => {
    if(!this.state.allRecipes) {
      const recipeSearch = this.state.allRecipes.filter(recipe => {
      if(recipe.q.toLowerCase().includes(this.state.searchInput.toLowerCase())) {
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
    }

    } else {
      return <p>Not found</p>
    }
    console.log("recipeOptionTypedIn", this.state.recipeOptionTypedIn);

    if(this.state.recipeOptionTypedIn) {
      return <Redirect to='/allrecipes/filter' />
    } else {
      return null
    }
  }


  toggleOptions = () => {
    this.setState({
      refineSearch: true
    })
  };


  render(){

    return(
      <>
        <div className='ctnr_home' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
          <div className='welcome_msg'>
            <p>Your next recipe is just  <br/> lion around the corner</p>
          </div>
              <Searchbar searchInput={this.state.searchInput} allRecipes={this.state.allRecipes} handleChange={this.handleChange} findRecipe={this.findRecipe} getRecipes={this.getRecipes}/>

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
};

export default Home;
