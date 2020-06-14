import React from 'react';
import Input from './Input';
import MainDiv from './MainDiv';
import CaruselRandom from './carousels/random';
import Logo from './Logo';

const MainPage = () => {
  async function fetchio() {
    const response = await fetch('/recipe/all');
    console.log(response.json());
  }

  fetchio();

  return (
    <>
      <div className='container'>
        <div className='MainPage'>
          <Logo />
          <Input />
          <MainDiv />
        </div>
        <CaruselRandom />
      </div>
    </>
  );
};
export default MainPage;
