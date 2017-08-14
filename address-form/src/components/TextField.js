import React from 'react';

const TextField = prop => {
  return (
   <div className='TextField'>
      <label htmlFor={props.name}>{props.label}</label>
      <input type="text" id={props.id} name={props.name} />
    </div>
  );
}; 

export default TextField;
