import React, { Component } from 'react'
import AllergiesForm from './AllergiesForm'
import {Link} from 'react-router-dom'
import RefinedRecipes from './RefinedRecipes.js'

class Recipes extends Component {

  state = {
    allergyRecipes: [],
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
  },
    userSearchResults: [],
    textInput: "",
    submitted: false,
  }

  handleAllergyChange = (event) => {
    let checkAllergy = {...this.state.checkAllergy}

    let id = event.target.id
    checkAllergy[id] = !checkAllergy[id]

    this.setState({checkAllergy: checkAllergy})
}

displayRecipes = () => {

  let oneRecipe = this.props.allRecipes.map((recipe) => {

    return(
      <>
      <Link to={'/' + recipe.recipe.label}> <button>
      <h4> {recipe.recipe.label}</h4>
      <img src={recipe.recipe.image} alt=""/>
      <p> {Math.round(recipe.recipe.calories, 2)} calories </p>
      <p> Dietary Information </p>
      {recipe.recipe.dietLabels.map((diet) => {
        return(
          <li key={diet}> {diet} </li>
        )
      })}
      <p> Health Label </p>
      {recipe.recipe.healthLabels.map((health) => {
        return(
          <li key={health}> {health} </li>
        )
      })}
      </button></Link>
      </>

    )
  })

  return <> {oneRecipe}</>
}


handleChange = (e) => {

      let searchResult = this.props.allRecipes.filter(recipe => {
        return recipe.recipe.label.toLowerCase() === this.state.textInput.toLowerCase()})

      this.setState({
        textInput: e.target.value,
        userSearchResults: searchResult
      })
    }


    handleSubmit = (e) => {
    e.preventDefault()
    let searchResult = this.props.allRecipes.filter(recipe => {
      let theRecipe = recipe.recipe.label.toLowerCase()
      let text = this.state.textInput.toLowerCase()

      return theRecipe.includes(text)
    })

    this.setState({
      userSearchResults: searchResult,
      submitted: true,
      textInput: ''
    })
  }

    displayRecipe = (e) => {

      if (!this.state.userSearchResults.length) {
        return ( <h3> Not Found </h3>)
      }
      return this.state.userSearchResults.map((recipe) => {
      return(
        <>
        <Link to={'/' + recipe.recipe.label}> <button>
        <h4> {recipe.recipe.label}</h4>
        <img src={recipe.recipe.image} alt=""/>
        <p> {Math.round(recipe.recipe.calories, 2)} calories </p>
        <p> Dietary Information </p>
        {recipe.recipe.dietLabels.map((diet) => {
          return(
            <li key={diet}> {diet} </li>
          )
        })}
        <p> Health Label </p>
        {recipe.recipe.healthLabels.map((health) => {
          return(
            <li key={health}> {health} </li>
          )
        })}
        </button></Link>
        </>
      )
    })
  }
  displayRefinedRecipes = () => {

    let oneRecipe = this.props.calorie_dietRecipes.map((recipe) => {

      return(
        <>
        <Link to={'/' + recipe.recipe.label}> <button>
        <h4> {recipe.recipe.label}</h4>
        <img src={recipe.recipe.image} alt=""/>
        <p> {Math.round(recipe.recipe.calories, 2)} calories </p>
        <p> Dietary Information </p>
        {recipe.recipe.dietLabels.map((diet) => {
          return(
            <li key={diet}> {diet} </li>
          )
        })}
        <p> Health Label </p>
        {recipe.recipe.healthLabels.map((health) => {
          return(
            <li key={health}> {health} </li>
          )
        })}
        </button></Link>
        </>

      )
    })

    return <> {oneRecipe}</>
  }

  handleRefinedChange = (e) => {

        let searchResult = this.props.calorie_dietRecipes.filter(recipe => {
          return recipe.recipe.label.toLowerCase() === this.state.textInput.toLowerCase()})

        this.setState({
          textInput: e.target.value,
          userSearchResults: searchResult
        })
      }


      handleRefinedSubmit = (e) => {
      e.preventDefault()
      let searchResult = this.props.calorie_dietRecipes.filter(recipe => {
        let theRecipe = recipe.recipe.label.toLowerCase()
        let text = this.state.textInput.toLowerCase()

        return theRecipe.includes(text)
      })

      this.setState({
        userSearchResults: searchResult,
        submitted: true,
        textInput: ''
      })
    }

      displayRefinedRecipe = (e) => {

        if (!this.state.userSearchResults.length) {
          return ( <h3> Not Found </h3>)
        }
        return this.state.userSearchResults.map((recipe) => {
        return(
          <>
          <Link to={'/' + recipe.recipe.label}> <button>
          <h4> {recipe.recipe.label}</h4>
          <img src={recipe.recipe.image} alt=""/>
          <p> {Math.round(recipe.recipe.calories, 2)} calories </p>
          <p> Dietary Information </p>
          {recipe.recipe.dietLabels.map((diet) => {
            return(
              <li key={diet}> {diet} </li>
            )
          })}
          <p> Health Label </p>
          {recipe.recipe.healthLabels.map((health) => {
            return(
              <li key={health}> {health} </li>
            )
          })}
          </button></Link>
          </>
        )
      })
    }

  render(){
    if (this.props.calorie_dietRecipes.length) {
      return <RefinedRecipes submitted={this.state.submitted} calorie_dietRecipes={this.props.calorie_dietRecipes}   displayRefinedRecipes={this.displayRefinedRecipes} textInput={this.state.textInput} handleRefinedChange={this.handleRefinedChange} handleRefinedSubmit={this.handleRefinedSubmit} displayRefinedRecipe={this.displayRefinedRecipe} handleAllergyChange={this.handleAllergyChange} checkAllergy={this.state.checkAllergy} allergies={this.state.allergies}/>
    }
if (this.state.submitted) {
  return <>
      <div className="searchbar">
      <form onSubmit={this.handleSubmit}>
      <input className="searchInput" onChange={this.handleChange} type="text" placeholder="Search by food title" value={this.state.textInput} />
      <input className="searchSumbit"type="submit" value="Search"/>
      </form>
      </div>
      <div>
        <AllergiesForm handleAllergyChange={this.handleAllergyChange} checkAllergy={this.state.checkAllergy} allergies={this.state.allergies} />
      </div>
      {this.displayRecipe()}
      <Link to='/'><img src="https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/Back-512.png" alt="" height='70' width='70'/></Link>
      </>
    }
      return <>
      <div className="searchbar">
      <form onSubmit={this.handleSubmit}>
      <input className="searchInput" onChange={this.handleChange} type="text" placeholder="Search by food title" value={this.state.textInput} />
      <input className="searchSumbit"type="submit" value="Search"/>
      </form>
      </div>
      <div>
        <AllergiesForm handleAllergyChange={this.handleAllergyChange} checkAllergy={this.state.checkAllergy} allergies={this.state.allergies} />
      </div>
      {this.displayRecipes()}

      <Link to="/"><img src="https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/Back-512.png" alt="" height='70' width='70'/></Link>
      </>

  }
}




export default Recipes
