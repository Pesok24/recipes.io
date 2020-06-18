import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Tostatus() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  /*   useEffect(() => {
    getRecipes();
  }, []); */

  let idRec = window.location.pathname;
  idRec = idRec.replace('/recipes/', '');

  const getRecipes = async () => {
    const responce = await fetch('http://localhost:3000/recipe/tostatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipe: idRec, user: user.id }),
    });
    const result = await responce.json();
  };
  return <button onClick={getRecipes}>Start to cook</button>;
}

export default Tostatus;
