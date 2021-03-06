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
      <Container>
        <Row>
          <Col>
            <h3>{props.data.title}</h3>
          </Col>
          <Col xs={6} md={4}>
            <Image
              src={props.data.image}
              width='400px'
              height='300px'
              rounded
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Reviews data={props.data} params={props.params} />
          </Col>
          <Col>
            <Ingredients data={props.data} />
          </Col>
        </Row>
        <Col>
          <Recipe data={props.data} />
        </Col>
        <Col>
          <Steps data={props.data} />
        </Col>
        <Likes />
        <Tostatus />
      </Container>
    </>
  );
};

// <div id='recipesImg'>
//   <h3>{props.data.title}</h3>
//   <img src={props.data.image} alt=""/>
// <Reviews data={props} />
// </div>

export default TitleRecipes;
