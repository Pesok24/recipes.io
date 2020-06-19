import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import doFetch from '../../fetchFunc';
import { ListGroup } from 'react-bootstrap';
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
      <b>Recipe:</b>
      <br />
      {props.data.recipe}
    </div>
  );
};

export default Recipe;
