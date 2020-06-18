import React, { useState, useEffect } from 'react';
import carouselLike from '../../utils/like-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LikeCarousel() {
  const [data, setData] = useState([{ reviews: [], ingridients: [] }]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    async function some() {
      let array = await carouselLike(user.id);
      setData(array);
    }
    some();
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
  };

  return (
    <>
      <div className='carouselRandom-main'>
        <h2 className='carouselTitle'>Mmmm.. yummy!</h2>
        <Slider {...settings}>
          {data.map((item) => {
            const itemId = item._id ? item._id : 'error';
            return (
              <Link
                to={{ pathname: `/recipes/${itemId}`, params: itemId }}
                key={itemId}
              >
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
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default LikeCarousel;
