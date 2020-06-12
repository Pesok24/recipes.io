import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return ( 
    <div id='footerDiv'>
      <Link to=''><p>О проекте</p></Link>
      <Link to=''><p>Рецепты</p></Link>
      <Link to=''><p>Поваренная книга</p></Link>
      <Link to=''><p>Поварятам</p></Link>
    </div>
   );
}
 
export default Footer;
