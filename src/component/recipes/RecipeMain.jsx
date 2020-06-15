import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import doFetch from "../../fetchFunc";
import { ListGroup } from 'react-bootstrap' 
const Recipe = (props) => {
  // const [recipesMain, setRecipesMain] = useState('');

  // useEffect(() => {
  //   const getFetch = async () => {
  //     const resp = await doFetch();
  //     console.log(resp[0].recipe);
  //     setRecipesMain(resp[0].recipe);
  //   };
  //   getFetch();
  // }, []);

  return (
  <div id='recipeList'>
    <ListGroup>
  <ListGroup.Item><b>Рецепт:</b></ListGroup.Item>
  <ListGroup.Item className="recipeListDiv">{props.data.data.recipe}</ListGroup.Item>
    </ListGroup>
  </div>
  )
};

export default Recipe;
