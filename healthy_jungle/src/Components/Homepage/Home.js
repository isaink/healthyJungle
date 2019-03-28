import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './../../styles/home.css';
let bg = require('./../../img/vector-banana-leaf-background.jpg');
// const {apiId, apiKey} = require('../../secrets.js')

class Home extends Component {
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getRecipes()
  };

  render(){
    return(
      <>
        <div className='ctnr_home' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
          <div className='welcome_msg'>
              <div className='welcoming'> 
                <p className='inner_ctnr'> <b id='quotes'>"</b> Your next recipe is just lion around the corner <b id='quotes'>"</b>  <br/> <span id='flecha'> → </span> </p>
              </div>
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

          <p onClick={this.props.toggleOptions} className='refined_search'> REFINE SEARCH BY : Calories & Diet</p>
          <div className='options'>
            {this.props.refineSearch ?
          <div>

          <form onSubmit={this.props.onSumbit} className='form_options'>

          <div className="caloriesCheckbox">
            <span className='categories_search'>CALORIES</span>
            <br/>
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
          <span className='categories_search'>DIET</span>
          <br/>
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

          <button className='bttn_categories'>{this.props.buttonText}</button>
          </form>
          </div> : null }
          </div>

        </div>
      </div>
      </>
    )
  }

};


export default withRouter(Home);
