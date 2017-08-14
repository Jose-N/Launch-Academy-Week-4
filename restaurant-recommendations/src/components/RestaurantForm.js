import React from 'react';

const RestaurantForm = props => {
  return (
    <div className='RestaurantContainter'>
      <form className='RestaurantForm' onSubmit={props.handleFormSubmit}>
        <label htmlFor="restaurantName">Restaurant Name</label>
        <input type="text" name="restaurantName" id='restaurant-name'
         onChange={props.handleItemChange}
         value={props.restaurantName} />

        <label htmlFor="restaurantAddress">Restaurant Address</label>
        <input type="text" name="restaurantAddress" id='restaurant-address'
         onChange={props.handleItemChange}
         value={props.restaurantAddress} />

        <label htmlFor="restaurantDescription">Restaurant Description</label>
        <input type="text" name="restaurantDescription"
         id='restaurant-Description'
         onChange={props.handleItemChange}
         value={props.restaurantDescription} />

        <label htmlFor="restaurantCategories">Restaurant Categories</label>
        <input type="text" name="restaurantCategories"
         id='restaurant-Categories'
         onChange={props.handleItemChange}
         value={props.restaurantCategories} />

        <label htmlFor="restaurantImage">Restaurant Image</label>
        <input type="text" name="restaurantImage" id='restaurant-image'
         onChange={props.handleItemChange}
         value={props.restaurantImage} />

        <label htmlFor="restaurantWebsite">Restaurant Website</label>
        <input type="text" name="restaurantWebsite" id='restaurant-website'
         onChange={props.handleItemChange}
         value={props.restaurantWebsite} />
      
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
}; 

export default RestaurantForm;
