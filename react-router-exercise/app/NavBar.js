import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div className="app">
        <div className='nav-bar'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/goodbye'>Goodbye</Link>
            <Link className='link' to='/custom-greeting'>Custom Greeting</Link>
        </div>
        <div className="row">
          <div className='main large-8 large-centered columns'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;
