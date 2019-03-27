import React, { Component } from 'react';
import './../../styles/home.css';
// import { withRouter } from 'react-router';
// import axios from 'axios';
let bg = require('./../../src/vector-banana-leaf-background.jpg');
class Home extends Component {
  constructor(){
    super()
    this.state = {

    };
  };

  render(){

    return(
      <>
        <div className='ctnr_home' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
          <header id='app_name'>
            <h1>HEALTHY JUNGLE</h1>
          </header>
          <hr/>
        </div>
      </>
    )
  }
};

export default Home;
