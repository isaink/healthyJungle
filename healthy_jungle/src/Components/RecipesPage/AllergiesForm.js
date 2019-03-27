import React, { Component } from 'react'


class AllergiesForm extends Component {

  handleAllergySubmit = (event) => {
    event.preventDefault()

  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleAllergySubmit}>
        <input className="allergies" onChange={this.props.handleAllergyChange} type="radio" name="allergies" value="gluten" id="gluten" /> Gluten
        <input className="allergies" onChange={this.props.handleAllergyChange} type="radio" name="allergies" value="dairy" id="dairy" /> Dairy
        <input className="allergies" onChange={this.props.handleAllergyChange} type="radio" name="allergies" value="eggs" id="eggs" /> Eggs
        <input className="allergies" onChange={this.props.handleAllergyChange} type="radio" name="allergies" value="soy" id="soy" /> Soy
        <input className="allergies" onChange={this.props.handleAllergyChange} type="radio" name="allergies" value="wheat" id="wheat" /> Wheat
        <input className="allergies" onChange={this.props.handleAllergyChange} type="radio" name="allergies" value="fish" id="fish" /> Fish
        <input className="allergies" onChange={this.props.handleAllergyChange} type="radio" name="allergies" value="shellfish" id="shellfish" /> Shellfish
        <input className="allergies" onChange={this.props.handleAllergyChange} type="radio" name="allergies" value="treenuts" id="treenuts" /> Tree Nuts
        <input className="allergies" onChange={this.props.handleAllergyChange} type="radio" name="allergies" value="peanuts" id="peanuts" /> Peanuts
        </form>
      </div>
    )
  }
}




export default AllergiesForm
