import React, { useEffect } from 'react';
import img from '../../images/fish.png'
import { useState } from 'react';
import doFetch from '../../fetchFunc';
import Reviews from './Reviews';
const TitleRecipes = () => {

  const [ data, setData ] = useState('')

  useEffect(() => {
    const getFetch = async () => {
    const resp = await doFetch()
    console.log(resp);
    setData(resp[0])
  }
  getFetch()
  }, [])

  return ( 
    <>
    <div id='recipesImg'>
      <img src={data.image} alt=""/>
      <h3>{data.title}</h3>
    <Reviews />
    </div>
    </>
   );
}
 
export default TitleRecipes;
