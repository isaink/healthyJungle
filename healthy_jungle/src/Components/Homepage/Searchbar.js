import React, { Component } from 'react'

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
            type='text'
            onChange={this.props.handleChange}
            placeholder='What are you hunting for ?'
            value={this.props.searchInput}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


export default Searchbar
