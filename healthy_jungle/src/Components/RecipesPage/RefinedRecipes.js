import React, { Component } from 'react'
import AllergiesForm from './AllergiesForm'
import {Link} from 'react-router-dom'


class RefinedRecipes extends Component {

  render(){
    if (this.props.submitted) {
      return <>
          <div className="searchbar">
          <form onSubmit={this.props.handleRefinedSubmit}>
          <input className="searchInput" onChange={this.props.handleRefinedChange} type="text" placeholder="Search by food title" value={this.props.textInput} />
          <input className="searchSumbit"type="submit" value="Search"/>
          </form>
          </div>
          <div>
            <AllergiesForm handleAllergyChange={this.props.handleAllergyChange} checkAllergy={this.props.checkAllergy} allergies={this.props.allergies} />
          </div>
          {this.props.displayRefinedRecipe()}
          <Link to="/"><img src="https://cdn1.iconfinder.com/data/icons/navigation-40/24/i24_nav_back-512.png" alt="" height='70' width='70'/></Link>
          </>
        }
          return <>
          <div className="searchbar">
          <form onSubmit={this.props.handleRefinedSubmit}>
          <input className="searchInput" onChange={this.props.handleRefinedChange} type="text" placeholder="Search by food title" value={this.props.textInput} />
          <input className="searchSumbit"type="submit" value="Search"/>
          </form>
          </div>
          <div>
            <AllergiesForm handleAllergyChange={this.props.handleAllergyChange} checkAllergy={this.props.checkAllergy} allergies={this.props.allergies} />
          </div>
          {this.props.displayRefinedRecipes()}

          <Link to="/"> <img src="https://cdn1.iconfinder.com/data/icons/navigation-40/24/i24_nav_back-512.png" alt="" height='70' width='70'/></Link>
          </>

      }
  }


export default RefinedRecipes;
