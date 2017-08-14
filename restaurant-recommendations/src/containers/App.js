import React, { Component } from 'react'

import Restaurant from '../components/Restaurant'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import RestaurantForm from '../components/RestaurantForm'

import restaurants from '../constants/restaurants'
import reviews from '../constants/reviews'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants,
      reviews,
      selectedId: restaurants[0].id,
      name: '',
      rating: '20',
      review: '',
      restaurantName: '',
      restaurantAddress: '',
      restaurantDescription: '',
      restaurantCategories: [],      
      restaurantImage: '',
      restaurantWebsite: ''
    }
    this.restaurantClick = this.restaurantClick.bind(this)
    this.handleItemChange = this.handleItemChange.bind(this)
    this.handleReviewFormSubmit = this.handleReviewFormSubmit.bind(this)
    this.handleRestaurantFormSubmit = this.handleRestaurantFormSubmit.bind(this)
  }

  restaurantClick(event) {
    event.preventDefault()
    this.setState({selectedId: event.target.id})
  }

  selectedRestaurant() {
    return this.state.restaurants.find((restaurant) =>
      (restaurant.id === this.state.selectedId)
    )
  }

  handleItemChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
  }

  handleReviewFormSubmit(event) {
    event.preventDefault()
    let formPayload = {
      restaurant_id: this.state.selectedId,
      name: this.state.name,
      rating: parseInt(this.state.rating),
      content: this.state.review
    }
    this.setState({reviews: this.state.reviews.concat(formPayload)})
    this.clearForm(event)
  }

  handleRestaurantFormSubmit(event) {
    event.preventDefault()
    let id = this.state.restaurantName.replace(" ","-")
    let categories = this.state.restaurantCategories.split(',')
    let formPayload = {
      name: this.state.restaurantName,
      location: this.state.restaurantAddress,
      description: this.state.restaurantDescription,
      categories: categories,      
      image: this.state.restaurantImage,
      website: this.state.restaurantWebsite
    }
    this.setState({restaurants: this.state.restaurants.concat(formPayload)})
    this.clearForm(event)
  }

  clearForm(event) {
    this.setState({name: '', rating:'20', review: ''})
  }

  render() {
    let restaurantComponents = this.state.restaurants.map((restaurant) => {
      return (
        <Restaurant key={restaurant.id}
          data={restaurant}
          isSelected={this.state.selectedId === restaurant.id}
          handleClick={this.restaurantClick}/>
      )
    })

    let relevantReviews = this.state.reviews.filter((review) =>
      (this.state.selectedId === review.restaurant_id)
    )

    return(
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Restaurant</h1>
            {restaurantComponents}
          </div>
          <div className="small-9 columns">
            <h2>Reviews for {this.selectedRestaurant().name}</h2>
            <Reviews data={relevantReviews} />
            < ReviewForm
              handleItemChange={this.handleItemChange}
              rating={this.state.rating}
              name={this.state.name}
              review={this.state.review}
              handleFormSubmit={this.handleReviewFormSubmit} />
            <br />
            < RestaurantForm 
              handleItemChange={this.handleItemChange}
              restaurantName={this.state.restaurantName} 
              restaurantAddress={this.state.restaurantAddress} 
              restaurantDescription={this.state.restaurantDescription}
              restaurantCategories={this.state.restaurantCategories}      
              restaurantImage={this.state.restaurantImage} 
              restaurantWebsite={this.state.restaurantWebsite} 
              handleFormSubmit={this.handleRestaurantFormSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
