import React, { useState } from 'react';
// import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import doFetch from '../../fetchFunc';
import { useEffect } from 'react';
import TitleRecipes from './TitleRecipes';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';
import { loadSaga } from '../../redux/actioncreators/actionsSaga';
import { useLocation, useParams } from 'react-router-dom';

const Recipes = () => {
  const [data, setData] = useState({
    reviews: [],
    ingridients: [],
    recipe: '',
    title: '',
  });
  const location = useLocation();
  const dispatch = useDispatch()
  const allParams = useParams();


  useEffect(() => {

    const getFetch = async () => {
      const resp = await doFetch({ id: allParams.id });
      console.log(resp)
       dispatch({ type: 'STEPS', steps: resp.steps })
      setData(resp);
    };
    getFetch();
  }, []);
  return (
    <div id='recipesContainer'>
      <div id='recipesMain'>
        {allParams.id === 'error' ?  <div>Error</div> : <TitleRecipes data={data} params={location.params} />}
      </div>
    </div>
  );
};

export default Recipes;
