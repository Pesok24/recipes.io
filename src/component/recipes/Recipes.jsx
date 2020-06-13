import React from 'react';
import TitleRecipes from './TitleRecipes';
import Reviews from './Reviews';
import Ingredients from './Ingredients';

const Recipes = () => {
  return ( 
    <div id='recipesContainer'>
    <div id="recipesMain">
    <TitleRecipes />
    <Ingredients />
    </div>
    </div>
   );
}
 
export default Recipes;
