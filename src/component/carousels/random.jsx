import React, { useState, useEffect } from 'react';
import carouselLoader from '../../utils/random-caorusel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CaruselRandom() {
  const [data, setData] = useState([{ reviews: [], ingridients: [] }]);
  useEffect(() => {
    async function test() {
      let array = await carouselLoader();
      console.log(array);

      setData(array);
    }
    test();
  }, []);
  console.log(data);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    lazyLoaded: 'progressive',
  };

  return (
    <>
      <div class='carouselRandom-main'>
        <h2 class='carouselTitle'>Вкусные решения</h2>
        <Slider {...settings}>
          {data.map((item) => (
            <div className='carouselRandom-element'>
              <div className='carouselRandom-image'>
                <div className='shadow'>
                  <img
                    className='carousel-img'
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </div>
              <div className='carousel-title'>{item.title}</div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CaruselRandom;
