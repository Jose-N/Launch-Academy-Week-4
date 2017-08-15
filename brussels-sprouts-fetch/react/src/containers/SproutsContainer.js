import React, { Component } from 'react';
import RandomSprout from '../components/RandomSprout';
import SproutsIndex from '../components/SproutsIndex';
import LongestRecipe from '../components/LongestRecipe';

class SproutsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
      recipes: [],
      longestDish: ''
    }
  }

  getRandomRecipe(){
    fetch('/api/v1/random-recipe')
      .then(response => {
        if (response.ok) {
          console.log('response ok')
          return response.json()
        }else {
          let error = new Error()
          throw(error)
        }
      })
      .then( body => {
        this.setState({recipe:body, recipes: [], longestDish: ""})
      })
      .catch(error => console.error())
  }

  getAllRecipes(){
    fetch('/api/v1/recipes')
      .then(response => {
        if (response.ok) {
          console.log('response ok')
          return response.json()
        }else {
          let error = new Error()
          throw(error)
        }
      })
      .then( body => {
        this.setState({recipe:"", recipes: body, longestDish: ""})
      })
      .catch(error => console.error())
  }

  getLongestDish(){
    fetch('/api/v1/longest-dish')
      .then(response => {
        if (response.ok) {
          console.log('response ok')
          return response.json()
        }else {
          let error = new Error()
          throw(error)
        }
      })
      .then( body => {
        this.setState({recipe:"", recipes: [], longestDish: body})
      })
      .catch(error => console.error())
  }

  render(){
  console.log(this.state.longestDish)

    let handleRandomClick = () => {
      this.getRandomRecipe();
    }

    let handleIndexClick = () => {
      this.getAllRecipes();
    }

    let handleLongestClick = () => {
      this.getLongestDish();
    }

    return(
      <div className="container">
        <h1>Sprout Fetcher</h1>
        <RandomSprout
          recipe={this.state.recipe}
          handleClick = {handleRandomClick}
        />
        <SproutsIndex
          recipes={this.state.recipes}
          handleClick={handleIndexClick}
        />
        < LongestRecipe
          recipeLongest={this.state.longestDish}
          handleClick={handleLongestClick} />

        <div className="buttons">
          <button onClick={handleRandomClick} className="btn">Get Random Recipe</button>

          <button onClick={handleIndexClick} className="btn">See All Recipes</button>

          <button onClick={handleLongestClick} className="btn">Get Longest Dish</button>
        </div>
      </div>
    )
  }
}

export default SproutsContainer;
