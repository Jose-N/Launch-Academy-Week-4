import React from 'react';

const ReviewForm = props => {
  return (
    <form className='ReviewForm' onSubmit={props.handleFormSubmit} >
      <label htmlFor="name">Name</label>      
      <input type="text" name="name" id="name"
       onChange={props.handleItemChange}
       value={props.name} />

      <label htmlFor="rating">Rating</label>      
      <select id="rating" name="rating" value={props.rating} onChange={props.handleItemChange}>
        <option value="20">1</option>
        <option value="40">2</option>
        <option value="60">3</option>
        <option value="80">4</option>
        <option value="100">5</option>
      </select>

      <label htmlFor="review">Review</label>      
      <textarea id="review" name="review" cols="30" rows="10"
       onChange={props.handleItemChange}
       value={props.review}></textarea> 

      <input type="submit" name='submit' value='Submit' />
    </form>
  );
}; 

export default ReviewForm;
