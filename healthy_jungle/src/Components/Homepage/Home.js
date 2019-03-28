import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './../../styles/home.css';
import Checkbox from './CheckBoxes'
import Searchbar from  './Searchbar';
// import Recipes from './../RecipesPage/Recipes';
// import axios from 'axios';
let bg = require('./../../img/vector-banana-leaf-background.jpg');
// const {apiId, apiKey} = require('../../secrets.js')


class Home extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getRecipes()
  }


  render(){

    return(
      <>
        <div className='ctnr_home' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
          <div className='welcome_msg'>
            <p>Your next recipe is just  <br/> lion around the corner</p>
          </div>

          <div className='searchbar-form'>
            <form onSubmit = {this.handleSubmit}>
              <input
                className='input'
                type='text'
                onChange={this.props.handleChange}
                placeholder='What are you hunting for ?'
                value={this.props.searchInput}
              />
              <button id='bttn_search'type='submit'>Submit</button>
            </form>

          </div>


          <div className='options'>
          <p onClick={this.props.toggleOptions}>REFINE SEARCH BY</p>

          {this.props.refineSearch ?
          <div>
          <form onSubmit={this.props.onSumbit} className='form_options'>
          <div className="caloriesCheckbox">
            <input className="calories" onChange={this.props.allChange} type="radio" name="calories" value="0-300" id="under300" /> Under 300
            <br/>
            <input className="calories" onChange={this.props.allChange} type="radio" name="calories" value="301-399" id="f301to399" /> 301-399
            <br/>
            <input className="calories" onChange={this.props.allChange} type="radio" name="calories" value="401-499" id="f401to499" /> 401-499
            <br/>
            <input className="calories" onChange={this.props.allChange} type="radio" name="calories" value="501-599" id="f501to599" /> 501-599
            <br/>
            <input className="calories" onChange={this.props.allChange} type="radio" name="calories" value="600-4000" id="over600" /> Over 600
          </div>

          <div className="diet">


            <input className="diet" onChange={this.props.allChange} type="radio" name="diet" value="high-protein" id="highprotein" /> High Protein
            <br/>
            <input className="diet" onChange={this.props.allChange} type="radio" name="diet" value="high-fiber" id="highfiber" /> High Fiber
            <br/>
            <input className="diet" onChange={this.props.allChange} type="radio" name="diet" value="balanced" id="balanced" /> Balanced
            <br/>
            <input className="diet" onChange={this.props.allChange} type="radio" name="diet" value="low-fat" id="lowfat" /> Low Fat
            <br/>
            <input className="diet" onChange={this.props.allChange} type="radio" name="diet" value="low-carb" id="lowcarb" /> Low Carb
            <br/>
            <input className="diet" onChange={this.props.allChange} type="radio" name="diet" value="low-sodium" id="lowsodium" /> Low Sodium
          </div>

          <button>{this.props.buttonText}</button>
          </form>
          </div> : null }
          </div>

        </div>
      </>
    )
  }

};


export default withRouter(Home);
