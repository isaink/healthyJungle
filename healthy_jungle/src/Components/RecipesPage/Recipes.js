import React, { Component } from 'react'
import AllergiesForm from './AllergiesForm'

class Recipes extends Component {
  constructor(props){
    super(props);

    this.state = {
      allergies: '',
      checkAllergy: { gluten: false,
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
  }
componentDidMount(){
  this.displaySearchedRecipes()
}


  handleAllergyChange = (event) => {
    let checkAllergy = {...this.state.checkAllergy}

    let id = event.target.id
    checkAllergy[id] = !checkAllergy[id]

    this.setState({checkAllergy: checkAllergy})
}

displaySearchedRecipes = (props) => {
  console.log("hello props", this.props);
  if(this.props.allRecipes){

  return this.props.allRecipes.map(recipes => {
    return (

      <div>

      </div>
    )
  })}

};



  render(){
    return (
      <div>
        <AllergiesForm handleAllergyChange={this.handleAllergyChange} checkAllergy={this.state.checkAllergy} allergies={this.state.allergies} />
      </div>
    )
  }
}




export default Recipes
