import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return ( 
    <div id='footerDiv'>
      <Link to=''><p>About</p></Link>
      <Link to=''><p>Solutions</p></Link>
      <Link to=''><p>Team</p></Link>
      <Link to=''><p>Your Recipes.io</p></Link>
    </div>
   );
}
 
export default Footer;
