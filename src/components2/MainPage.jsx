import React from 'react'
import Input from './Input';
import MainDiv from './MainDiv';
// import Carusel from './Carusel';
import Logo from './Logo';


const MainPage = () => {
  return ( 
    <div className="MainPage">
      <Logo />
      <Input />
      <MainDiv />
      {/* <Carusel /> */}
    </div>
   );
}
 
export default MainPage;
