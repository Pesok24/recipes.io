import React from 'react';
import Input from './Input';
import MainDiv from './MainDiv';
import CaruselRandom from './carousels/random';
import Logo from './Logo';
import FoundCarousel from './carousels/FoundCarousel';

const MainPage = () => {

  const [data, setData ] = React.useState([])

  return (
    <>
      <div className='container'>
        <div className='MainPage'>
          <Logo />
          
          <Input setData={setData}/>
          <FoundCarousel data={data}/>
          {/* {data && data.map(item =>  JSON.stringify(item))} */}
        </div>
        <MainDiv />
        <CaruselRandom/>
      </div>
    </>
  );
};
export default MainPage;
