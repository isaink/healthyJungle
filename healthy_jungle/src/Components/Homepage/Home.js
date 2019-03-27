import React, { Component } from 'react';
import './../../styles/home.css';
import { withRouter } from 'react-router';
import axios from 'axios';

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
      }


    };
  };

  checkAllApply = (e) => {
    let calories= {...this.state.calories}
    let diet = {...this.state.diet}

    let id = e.target.id

    calories[id]= !calories[id]
    diet[id] = !diet[id]
    
    this.setState({calories: calories, diet: diet})

  }

  render(){

    return(
      <>
      <h1>Home</h1>
      </>
    )
  }
};

export default Home;
