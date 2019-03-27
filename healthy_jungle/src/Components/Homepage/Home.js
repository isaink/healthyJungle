import React, { Component } from 'react';
import './../../styles/home.css';
import Searchbar from  './Searchbar';
// import { withRouter } from 'react-router';
// import axios from 'axios';
let bg = require('./../../src/vector-banana-leaf-background.jpg');




class Home extends Component {
  constructor(){
    super()
    this.state = {

      calories : {
        under300: false,
        f301to399: false,
        f401to499: false,
        f501to599: false,
        over600: false,
      },
      diet : {
        keto: false,
        balanced: false,
        dairyfree: false,
        Vegan: false,
        Vegetarian: false,
        lowcarb: false,
        highprotein: false,
        glutenfree: false,
        highfiber: false,
        lowsugar: false,
        lowfat: false
      },
      searchInput: '',
      allRecipes: [],
      recipeOptionTypedIn: []
    };
  };



componentDidMount() {
  this.getRecipes()
}


let url = `https://api.edamam.com/search?q=${this.state.searchInput}&app_id=${apiId}&app_key=${apiKey}`

getRecipes = () => {
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
          <header id='app_name'>
            <h1>HEALTHY JUNGLE</h1>
          </header>

          <div>
            <h3>Your next recipe is just
              <br/>Lion arounf the corner</h3>
          </div>

            <div >
              <Searchbar/>
            </div>
        </div>
      </>
    )
  }
};

export default Home;
