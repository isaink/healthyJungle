import React, { Component } from 'react'
import './../../styles/recipes.css'

class AllergiesForm extends Component {

  handleAllergySubmit = (event) => {
    event.preventDefault()
  };

  render(){
    return (
      <div className='ctnr_allergies'>
        <form onSubmit={this.handleAllergySubmit}>
          <input className="allergies" onChange={this.props.handleAllergyChange} checked={this.props.checkAllergy.gluten} type="checkbox" name="allergies" value="gluten" id="gluten" /> Gluten
          <input className="allergies" onChange={this.props.handleAllergyChange} checked={this.props.checkAllergy.dairy} type="checkbox" name="allergies" value="dairy" id="dairy" /> Dairy
          <input className="allergies" onChange={this.props.handleAllergyChange} checked={this.props.checkAllergy.eggs} type="checkbox" name="allergies" value="eggs" id="eggs" /> Eggs
          <input className="allergies" onChange={this.props.handleAllergyChange} checked={this.props.checkAllergy.soy} type="checkbox" name="allergies" value="soy" id="soy" /> Soy
          <input className="allergies" onChange={this.props.handleAllergyChange} checked={this.props.checkAllergy.wheat} type="checkbox" name="allergies" value="wheat" id="wheat" /> Wheat
          <input className="allergies" onChange={this.props.handleAllergyChange} checked={this.props.checkAllergy.fish} type="checkbox" name="allergies" value="fish" id="fish" /> Fish
          <input className="allergies" onChange={this.props.handleAllergyChange} checked={this.props.checkAllergy.shellfish} type="checkbox" name="allergies" value="shellfish" id="shellfish" /> Shellfish
          <input className="allergies" onChange={this.props.handleAllergyChange} checked={this.props.checkAllergy.treenuts} type="checkbox" name="allergies" value="treenuts" id="treenuts" /> Tree Nuts
          <input className="allergies" onChange={this.props.handleAllergyChange} checked={this.props.checkAllergy.peanuts} type="checkbox" name="allergies" value="peanuts" id="peanuts" /> Peanuts
        </form>
      </div>
    )
  }
};

export default AllergiesForm
