import React, { Component } from 'react';
import './../../styles/home.css';
import Checkbox from './CheckBoxes'
import Searchbar from  './Searchbar';
// import { withRouter } from 'react-router';
// import axios from 'axios';
let bg = require('./../../src/vector-banana-leaf-background.jpg');
class Home extends Component {
  constructor(){
    super()
    this.state = {
      calories : '',
      diet : '',
      searchInput: '',
      allRecipes: [],
      recipeOptionTypedIn: []
      }
    };


  allChange = (e) => {
     this.setState({[e.target.name]:e.target.value})
   }




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
          <header id='app_name'>
            <h1>HEALTHY JUNGLE</h1>
          </header>

          <div>
            <h3>Your next recipe is just
              <br/>Lion around the corner...</h3>
          </div>

            <div >
              <Searchbar/>
            </div>
            <div>
              <Checkbox allChange={this.allChange}/>
            </div>
        </div>
      </>
    )
  }
};

export default Home;
