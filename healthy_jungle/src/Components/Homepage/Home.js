import React, { Component } from 'react';
import './../../styles/home.css';
import { withRouter } from 'react-router';
import axios from 'axios';
import Checkbox from './CheckBoxes'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      calories : "",
      diet : ""
      }


    };


  allChange = (e) => {
     e.preventDefault();
     this.setState({[e.target.name]:e.target.value})
   }

  render(){

    return(
      <>
      <h1>Home</h1>
      <Checkbox allChange={this.allChange}/>
      </>
    )
  }
};

export default Home;
