import React, { useState } from 'react';
// import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import doFetch from '../../fetchFunc';
import { useEffect } from 'react';
import TitleRecipes from './TitleRecipes';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions'
import { loadSaga } from '../../redux/actioncreators/actionsSaga';

const Recipes = () => {
  const [data, setData] = useState({reviews:[], ingridients:[], recipe: ''})

  useEffect(() => {
    console.log('2');
    
    const getFetch = async () => {
      const resp = await doFetch();
      console.log('>>>>>>>',resp);
      setData(resp[0]);
    };
    getFetch();
  }, []);


console.log(data); 
let some = data.reviews;
console.log(some)


  
  const reviews = data.reviews

  return (
    <div id='recipesContainer'>
    <div id="recipesMain">
    {/* <>
    <div id='recipesImg'>
      <h3>{data.title}</h3>
      <img src={data.image} alt=""/></div>
    </> */}
    <TitleRecipes data={data} />
    </div>
    </div>
   );
}
 
export default Recipes;
