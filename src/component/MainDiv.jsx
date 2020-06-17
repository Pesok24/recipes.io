import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import carouselLoader from '../utils/random-caorusel';

const MainDiv = () => {
  useEffect(() => {
    async function test() {
      await carouselLoader();
    }
    test();
  }, []);

  const data = useSelector((state) => state.mainrecipe);
  console.log(data);

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
            <br />
            <span class='likes'>
              Понравилось: 🙂 {data.reviews ? data.reviews.length : 0}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainDiv;
