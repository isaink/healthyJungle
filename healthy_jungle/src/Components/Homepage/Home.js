import React, { Component } from 'react'
import { withRouter } from 'react-router'
import axios from 'axios'


class Home extends Component {
  constructor(){
    super()
    this.state = {

    };
  };


  let url

  axios.get(`"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
  `)
  render(){

    return(
      <>
      <h1>Home</h1>
      </>
    )
  }
};

export default Home;
