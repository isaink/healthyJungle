import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import '../../secrets.js'


class Home extends Component {
  constructor(){
    super()
    this.state = {

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
