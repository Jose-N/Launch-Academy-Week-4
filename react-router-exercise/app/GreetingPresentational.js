import React from 'react';

const GreetingPresentational = props => {
  let greetingsFragment = props.greetings.map(greeting => {
    return (
      <p>{greeting}</p>
    )
  })
  return (
    <div className='GreetingPresentational'>
      {greetingsFragment}
    </div>
  );
}; 

export default GreetingPresentational;
