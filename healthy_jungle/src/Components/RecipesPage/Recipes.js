import React, { Component } from 'react';

class DisplayRecipes extends Component {

displaySearchedRecipes = () => {
  return this.props.recipeOptionTypedIn.map(recipes => {
    return (
      <div>
      
      </div>
    )
  })
}

  render(){
    return(
      <>
      <h1>searched recipes</h1>

      </>
    )
  }
}

export default DisplayRecipes;
