import React from 'react';
import { useSelector } from 'react-redux';
import Status from '../profile/Status';
import carouselLoader from '../../utils/random-caorusel';
import './Profile.css';
import InputName from './InputName';
import { useState, useEffect } from 'react';
import PhotoModal from '../profile/PhotoModal';
import NewRecipe from './NewRecipe';
import PhoneModal from './PhoneModal';
import { Link } from 'react-router-dom';
import LikeCarousel from '../carousels/like-carousel';

function Profile() {
  const user = useSelector((state) => state.user);
  const status = useSelector((state) => state.status);
  const data = carouselLoader[Math.ceil(Math.random() * carouselLoader.length)];
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);
  const [review, setReview] = useState({ recipe: { _id: '' } });
  const [time, setTime] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeNameHandler = () => {};

  useEffect(() => {
    const getreviews = async () => {
      try {
        console.log('с ЮЗЭФЕКТА', user.id);
        const response = await fetch('/recipe/renderreview', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: user.id }),
        });
        let result = await response.json();
        setReview(result);
        console.log('Это результат', result);
        console.log('this is response', response);
      } catch (e) {
        console.log('ошибка');
      }
    };
    getreviews();
  }, [user.id]);

  console.log('State profile', review);
  async function postgoodreview() {
    const response = await fetch('recipe/getreview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.id,
        text: text,
        recipeId: status.id,
        flag: '🙂',
      }),
    });
    await console.log(response.json());
  }

  async function postbadreview() {
    //фетч всех, мб другая ручка
    const response = await fetch('/recipe/getreview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.id,
        text: text,
        recipeId: status.id,
        flag: '😥',
      }),
    });
    await console.log(response.json());
  }
  console.log(review, 'revvvvvvvvvv');
  return (
    <>
      <div className='MainPage'>
        <div className='profileMainDiv'>
          <div className='profileInfo'>
            <div className='profileInfo__body'>
              <img
                src={user.img}
                className='profileInfo__img'
                alt='ProfilePic'
              />
              <div className='profileInfo__userInfo'>
                <p>{user.name}</p>
                <p>
                  <Status />{' '}
                </p>
              </div>
            </div>

            <div className='profileInfo__buttons'>
              <InputName />
              <PhotoModal />
              <NewRecipe />
              <PhoneModal />
            </div>
          </div>
          <div className='previousDish'>
            <h3>
              What about{' '}
              <Link
                to={{
                  pathname: `/recipes/${status.id}`,
                }}
              >
                {status.status}
              </Link>
            </h3>

            <div className='previousDish__body'>
              <div className='previousDish__reviewBlock'>
                <div className='previousDish__preview'>
                  <img className='previousDish__img' />
                  <div className='previousDish__title__like'>
                    <h4 className='previousDish__title'> </h4>
                    <div className='previousDish__buttons'>
                      <div
                        className='rev-like'
                        onClick={() => postgoodreview()}
                      >
                        🙂
                      </div>
                      <div className='rev-like' onClick={() => postbadreview()}>
                        😥
                      </div>
                    </div>
                  </div>
                </div>
                <div className='previousDish_review'>
                  <textarea onChange={(e) => setText(e.target.value)} />
                </div>
              </div>
              <div className='previousDish__history'></div>
              <ul>
                {review.length !== 0 ? (
                  review.map((el, i) => {
                    console.log(typeof el);
                    return (
                      <li key={i}>
                        {el.flag}{' '}
                        <Link
                          to={{
                            pathname: `/recipes/${el.recipe._id}`,
                          }}
                        >
                          {el.recipe.title}
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <li>Let try your first recipe</li>
                )}
              </ul>
            </div>
          </div>
          <div className='youdlike'> </div>
          <LikeCarousel />
        </div>
      </div>
    </>
  );
}

export default Profile;
