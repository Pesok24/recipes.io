import React from 'react';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const Logo = (props) => {
    
  return (
    <Link to='/'>
    <div className="MainPage">
    <img src={logo} alt="" className='MainImg'/>
    </div> 
    </Link>
   );
}
 
export default Logo;
