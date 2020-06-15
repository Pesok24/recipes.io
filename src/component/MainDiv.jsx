import React, { useState, useEffect } from 'react';
import carouselLoader from '../utils/random-caorusel';

const MainDiv = () => {
  let [data, setData] = useState({ reviews: [], ingridients: [] });
  useEffect(() => {
    async function test(){

      let array = await carouselLoader();
      console.log(array);
      
      setData(array[0]);
    }
    test()
  }, []);

  console.log('>>>>>>',data);

  const good = data.reviews.length;

  return (
    <>
      <div>
        <h2 class='carouselTitle'>Пользователи выбирают</h2>
        <div className='mainDiv'>
          <img src={data.image} alt={data.title} className='main-page-img' />

          <p>
            <h3>
              {data.title}
              {}
            </h3>
            {data.recipe}
            <br />
            <span class='likes'>🙂 {good}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainDiv;
