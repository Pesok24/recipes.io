import React from "react";
import { useSelector } from "react-redux";
import Status from "../profile/Status";
import carouselLoader from "../../utils/random-caorusel";
import "./Profile.css";

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
                src="https://lh3.googleusercontent.com/proxy/YgpK7iLkleDYARw35q-kxZBvJAbFPdbqE2qA-eJbgKXX2JyPHsj9dl8WWGMWEKefPdIf5zXsmQMtM9QVzrtTY2gOB1Hkt2Zw_g"
                alt="ProfilePic"
              />
              <div className="profileInfo__userInfo">
                <p>user.name</p>
                <p>status</p>
              </div>
            </div>
            <div className="profileInfo__buttons">
              <div className="profileInfo__button">Изменить имя</div>
              <div className="profileInfo__button">Изменить аватарку</div>
              <div className="profileInfo__button">Добавить рецепт</div>
            </div>
          </div>
          <div className="previousDish">
            <h3>Последнее приготовленное</h3>
            <div className="previousDish__body">
              <div className="previousDish__reviewBlock">
                <div className="previousDish__preview">
                  <img className="previousDish__img" src={data.image} />
                </div>
                <div className="previousDish_review">
                  <textarea/>
                </div>
              </div>
              <div className="previousDish__list"></div>
            </div>
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
