import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import carouselLoader from '../../redux/actioncreators/actionsThunk';
import { STATES } from 'mongoose';

function CaruselRandom(props) {
  const store = useSelector((state) => state.carousel);
  const loading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    async function test() {
      dispatch(carouselLoader());
    }
    test();
  }, []);

  useEffect(() => {
    if (props.data) console.log(props.data);
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
      {loading ? (
        <div style={{ marginTop: 50 }}>
          <center>
            <img
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif'
              width='70px'
            />
          </center>
        </div>
      ) : (
        <div className='carouselRandom-main'>
          <h2 className='carouselTitle'>Mmmm.. yummy!</h2>
          <Slider {...settings}>
            {store.map((item) => {
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
      )}
    </>
  );
}

export default CaruselRandom;
