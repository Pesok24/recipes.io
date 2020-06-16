import React, { useState } from 'react';
// import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import doFetch from '../../fetchFunc';
import { useEffect } from 'react';
import TitleRecipes from './TitleRecipes';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions'
import { loadSaga } from '../../redux/actioncreators/actionsSaga';

import { useLocation } from 'react-router-dom';

const Recipes = () => {
  const [data, setData] = useState({reviews:[], ingridients:[], recipe: '', title: ''})
  const location = useLocation()
  console.log('Локация>>>>>',location);
  
  

  useEffect(() => {
    console.log('2');
    
    const getFetch = async () => {

      const resp = await doFetch({id: location.params});
      console.log('>>>>>>>',resp);
      setData(resp);

    };
    getFetch();
  }, []);




  return (
    <div id='recipesContainer'>
    <div id="recipesMain">


    <TitleRecipes data={data} params={location.params} />

    </div>
    </div>
   );
}
 
export default Recipes;
