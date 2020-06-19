import React, { useEffect } from 'react';
import Reviews from './Reviews';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Ingredients from './Ingredients';
import Recipe from './RecipeMain';
import Likes from './Likes';
import Tostatus from './Idoit';
import Steps from './Steps';

const TitleRecipes = (props) => {
  return (
    <>
      <div class='container'>
        <div class='row'>
          <div class='col-sm'>
            <h3>{props.data.title}</h3>
            <img src={props.data.image} />
            <hr />
            <Reviews data={props.data} params={props.params} />
          </div>
          <div class='col-sm'></div>
          <div class='col-sm'>
            <Ingredients data={props.data} />
            <hr />
            <div className='social'>
              <Likes />
              <Tostatus />
            </div>
            <hr />
          </div>
        </div>

        <hr />
        <Steps data={props.data} />
      </div>
    </>
  );
};

// <div id='recipesImg'>
//   <h3>{props.data.title}</h3>
//   <img src={props.data.image} alt=""/>
// <Reviews data={props} />
// </div>

export default TitleRecipes;
