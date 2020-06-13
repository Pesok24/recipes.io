import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import doFetch from "../../fetchFunc";
import { ListGroup } from 'react-bootstrap' 
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getFetch = async () => {
      const resp = await doFetch();
      console.log(resp[0].reviews);
      setReviews(resp[0].reviews);
    };
    getFetch();
  }, []);

  return (
  <div id='reviewsList'>
    <ListGroup>
    {reviews.map((e) => {
      return (
  <ListGroup.Item>{e}</ListGroup.Item>
      )
    })}
    </ListGroup>
  </div>
  )
};

export default Reviews;
