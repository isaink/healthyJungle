import React, { Component } from 'react';
import './../../styles/home.css';
import Checkbox from './CheckBoxes'
import Searchbar from  './Searchbar';
// import { withRouter } from 'react-router';
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
      calorie_dietRecipes: []
      }
    };

  allChange = (e) => {
     this.setState({[e.target.name]:e.target.value , buttonText: "Find"})
   }

   onSumbit = (e) => {
     e.preventDefault()

      const cal_dietUrl = `https://api.edamam.com/search?q=&app_id=${apiId}&app_key=${apiKey}&calories=${this.state.calories}&diet=${this.state.diet}`


  componentDidMount() {
    this.getRecipes()
  }



  getRecipes = () => {
    const url = `https://api.edamam.com/search?q=${this.state.searchInput}&app_id=${apiId}&app_key=${apiKey}`

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
          .then(res =>{
            console.log(res);
          })
  };

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  findRecipe = () => {
    let recipeSearch = this.state.allRecipes.filter(recipe => {
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
    } else {
      return <p>Not found</p>
    }
  }

  render(){

    return(
      <>
        <div className='ctnr_home' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
          <div className='welcome_msg'>
            <p>Your next recipe is just  <br/> lion around the corner</p>
          </div>
         

            <div className='options'>
              <Searchbar searchInput={this.state.searchInput} handleChange={this.handleChange} findRecipe={this.findRecipe} getRecipes={this.getRecipes}/>
            </div>
            <div>
                <p>REFINE SEARCH BY</p>
              <Checkbox allChange={this.allChange} onSumbit={this.onSumbit} buttonText={this.state.buttonText}/>
            </div>

        </div>
      </>
    )
  }
};

export default Home;
