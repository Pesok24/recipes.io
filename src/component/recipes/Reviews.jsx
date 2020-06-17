import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import doFetch from '../../fetchFunc';
import { ListGroup, Button, Modal } from 'react-bootstrap';
import Example from './InputModal';
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Reviews = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  const reviewSelector = useSelector((state) => state.reviews);
  console.log(reviewSelector);
  const allParams = useParams();
  console.log(allParams, 'Все парамсыqqqqqqqqqq');

  useEffect(() => {
    const getFetch = async function () {
      const responce = await fetch('http://localhost:3000/recipe/getrev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ params: allParams.id }),
      });
      console.log('????????????', responce);

      const result = await responce.json();
      console.log('....................', result, 'result v func');

      dispatch({ type: 'REVIEWS', reviews: result.data });
    };
    getFetch();
  }, []);

  const reviews1 = props.data.reviews;
  console.log('>>>>>', reviews1);
  reviewSelector.reverse();
  return (
    <>
      <div id='recipesHover'>
        <ListGroup.Item>
          <b>Отзывы:</b>
        </ListGroup.Item>
        <div id='reviewsList'>
          <ListGroup id='reviewListGroup'>
            {reviewSelector.map((e) => {
              let userName = e.author.name;
              console.log(e);
              return (
                <ListGroup.Item>
                  <b>{userName}: </b>
                  {e.text}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
        <Example params={props.params} />
      </div>
    </>
  );
};

export default Reviews;
