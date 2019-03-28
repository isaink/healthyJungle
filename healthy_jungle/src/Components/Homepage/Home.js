import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
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
            allRecipes: res.data.hits
          })
      })
  };

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }


  toggleOptions = () => {
    this.setState({
      refineSearch: true
    })
  };


  render(){
    const { buttonText, searchInput,refineSearch, calorie_dietRecipes  } = this.state;

    return(
      <>
        <div className='ctnr_home' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
          <div className='welcome_msg'>
            <p>Your next recipe is just  <br/> lion around the corner</p>
          </div>
              <Searchbar searchInput={searchInput} handleChange={this.handleChange} findRecipe={this.findRecipe} getRecipes={this.getRecipes}/>

            <div className='options'>
                <p onClick={this.toggleOptions}>REFINE SEARCH BY</p>
  
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
