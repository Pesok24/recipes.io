import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import doFetch from "../../fetchFunc";
import { ListGroup, Button, Modal } from "react-bootstrap";
import Example from "./InputModal";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
const Reviews = (props) => {
  const dispatch = useDispatch()

  const reviewSelector = useSelector(state => state.reviews)
  console.log(reviewSelector);
  useEffect(() => {
    const getFetch = async function () {
      const responce = await fetch("recipe/getrev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ params: props.params }),
      });
      console.log("????????????", responce);

      const result = await responce.json();
      console.log("....................", result, "result v func");

      dispatch({ type: "REVIEWS", reviews: result.data })
    };
    getFetch();
  }, []);

  
  const reviews1 = props.data.reviews;
  console.log(">>>>>", reviews1);

  return (
    <>
      <div id="recipesHover">
        <ListGroup.Item>
          <b>Отзывы:</b>
        </ListGroup.Item>
        <div id="reviewsList">
          <ListGroup id="reviewListGroup">
            {reviewSelector.map((e) => {
              console.log(e);
              return <ListGroup.Item>{e.text}</ListGroup.Item>;
            })}
          </ListGroup>
        </div>
        <Example params={props.params} />|
      </div>
    </>
  );

};

export default Reviews;
