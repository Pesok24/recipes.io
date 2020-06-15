import React from "react";
import { useSelector } from "react-redux";
import Status from "../profile/Status";
import carouselLoader from "../../utils/random-caorusel";
import "./Profile.css";
import CaruselRandom from "../carousels/random";

function Profile() {
  const user = useSelector((state) => state.user);
  const data = carouselLoader[Math.ceil(Math.random() * carouselLoader.length)];

  return (
    <>
      <div className="MainPage">
        <div className="profileMainDiv">
          <div className="profileInfo">
            <div className="profileInfo__body">
              <img
                className="profileInfo__img"
                src="https://ukrsekta.info/images/rik.jpg"
                alt="ProfilePic"
              />
              <div className="profileInfo__userInfo">
                <p>user.name</p>
                <p>status</p>
              </div>
            </div>
            <div className="profileInfo__buttons">
              <button className="profileInfo__button button">Изменить имя</button>
              <button className="profileInfo__button button">Изменить аватарку</button>
              <button className="profileInfo__button button">Добавить рецепт</button>
            </div>
          </div>
          <div className="previousDish">
            <h3>Последнее приготовленное</h3>
            <div className="previousDish__body">
              <div className="previousDish__reviewBlock">
                <div className="previousDish__preview">
                  <img className="previousDish__img" src={data.image} />
                  <div className="previousDish__title__like">
                    <h4 className="previousDish__title">Какое-то блюдо</h4>
                    <div className="previousDish__buttons">
                      <button className="previousDish__like button">🙂</button>
                      <button className="previousDish__dislike button">😥</button>
                    </div>
                  </div>
                </div>
                <div className="previousDish_review">
                  <textarea />
                </div>
              </div>
              <div className="previousDish__history"></div>
              <ul>
                <li>🙂 Курица в ананасах</li>
                <li>🙂 Курица в ананасах</li>
                <li>🙂 Курица в ананасах</li>
                <li>🙂 Курица в ананасах</li>
                <li>🙂 Курица в ананасах</li>
              </ul>
            </div>
          </div>
          <div className="youdlike">
            <CaruselRandom/>
          </div>
        </div>
      </div>
      {/* <div>
        <div className='userImage'>
          <img src={user.image} alt='Фото профиля' />
        </div>
        
      </div> */}
    </>
  );
}

export default Profile;
