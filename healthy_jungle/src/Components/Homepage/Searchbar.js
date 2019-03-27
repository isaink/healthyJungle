import React, { Component } from 'react'
import './../../styles/home.css';

class Searchbar extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.findRecipe()
    this.props.getRecipes()
  }

  render(){
    return (
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
    )
  }
}


export default Searchbar
