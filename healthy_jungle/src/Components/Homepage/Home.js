import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'


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

  render(){

    return(
      <>
      <h1>Home</h1>
      </>
    )
  }
};

export default Home;
