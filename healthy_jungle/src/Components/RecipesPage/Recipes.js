import React, { Component } from 'react'
import AllergiesForm from './AllergiesForm'


class Recipes extends Component {

  state = {
    allergies: ''
  }

  handleAllergyChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    
  render(){
    return (
      <div>
        <AllergiesForm handleAllergyChange={this.handleAllergyChange} allergies={this.state.allergies}/>
      </div>
    )
  }
}




export default Recipes
