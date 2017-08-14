import React from 'react';

const TextField = props => {
  return (
   <div className='TextField'>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        value={props.content}
        onChange={props.handleChange} />
    </div>
  );
}; 

export default TextField;
