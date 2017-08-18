import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

const Layout = (props) => {
 return(
   <div>
     <h1 className="page-title text-center"> Jane Jupiter, Developer </h1>
     <Link to='/projects'>Projects</Link>
     <Link to='/resume'>Resume</Link>
     {props.children}
   </div>
 )
}

export default Layout;
