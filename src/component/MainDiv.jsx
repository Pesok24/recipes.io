import React from 'react';
import pasta from '../images/pasta.png';
import carouselLoader from '../utils/random-caorusel';

const MainDiv = () => {
  const data = carouselLoader[Math.ceil(Math.random() * carouselLoader.length)];
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
            <span class="likes">🙂 {good}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainDiv;
