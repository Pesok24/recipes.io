import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import doFetch from "../../fetchFunc";
import { ListGroup } from 'react-bootstrap' 
const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
console.log(props);

  // useEffect(() => {
  //   const getFetch = async () => {
  //     const resp = await doFetch();
  //     console.log(resp[0].reviews);
  //     setReviews(resp[0].reviews);
  //   };
  //   getFetch();
  // }, []);
  const reviews1 = props.data.data.reviews
  console.log('>>>>>',reviews1);
  
  return (
    <>
    <div id='recipesHover'>
      <ListGroup.Item><b>Отзывы:</b></ListGroup.Item>
  <div id='reviewsList'>
    <ListGroup id='reviewListGroup'>
    {reviews1.map((e) => {
      console.log(e);
      return (
        <ListGroup.Item>{e}</ListGroup.Item>
        )
      })}
    </ListGroup>
      </div>
  </div>
  </>
  )
};

export default Reviews;
