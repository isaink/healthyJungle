import React, { Component } from 'react'
import AllergiesForm from './AllergiesForm'

class Recipes extends Component {

  state = {
    allergies: '',
    checkAllergy: { 
    gluten: false,
    dairy: false,
    eggs: false,
    soy: false,
    wheat: false,
    fish: false,
    shellfish: false,
    treenuts: false,
    peanuts: false
    }
  }

  handleAllergyChange = (event) => {
    let checkAllergy = {...this.state.checkAllergy}

    let id = event.target.id
    checkAllergy[id] = !checkAllergy[id]

    this.setState({checkAllergy: checkAllergy})
  }
  componentDidMount(){
    this.props.fetchRecipes()
  }
  render(){
    console.log( 'pros recipes', this.props)
    return (
      <div>
        <AllergiesForm handleAllergyChange={this.handleAllergyChange} checkAllergy={this.state.checkAllergy} allergies={this.state.allergies} />
      </div>
    )
  }
}




export default Recipes
