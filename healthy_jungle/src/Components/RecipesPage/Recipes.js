import React, { Component } from 'react'
import AllergiesForm from './AllergiesForm'

class Recipes extends Component {

  state = {
    allergies: '',

    checkAllergy: { gluten: false,
    dairy: false,
    eggs: false,
    soy: false,
    wheat: false,
    fish: false,
    shellfish: false,
    treenuts: false,
    peanuts: false,
    }
  }

  handleAllergyChange = (event) => {
    let checkAllergy = {...this.state.checkAllergy}

    let id = event.target.id
    checkAllergy[id] = !checkAllergy[id]

    this.setState({checkAllergy: checkAllergy})
}



handleSubmit = event => {
  event.preventDefault();
  const { checkAllergy } = this.state
  const { allRecipes, searchInput } = this.props;

if(checkAllergy){

  let searchResult = allRecipes.filter(recipes => {
    return recipes.recipes.dietLabels.toLowerCase().includes(searchInput.toLowerCase());
  });

  this.setState({
    searchResults: searchResult,
    searchInput: "",
    submitted: true,
  });
};}


  render(){


    return (

      <>


      <div>
        <AllergiesForm handleAllergyChange={this.handleAllergyChange} checkAllergy={this.state.checkAllergy} allergies={this.state.allergies} />
      </div>

      </>
    )
  }
}




export default Recipes
