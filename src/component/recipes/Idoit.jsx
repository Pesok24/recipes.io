import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tostatus() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  /*   useEffect(() => {
    getRecipes();
  }, []); */

  let idRec = window.location.pathname;
  idRec = idRec.replace('/recipes/', '');

  const notify = () => {
    toast('🍗 Good luck with that recipe!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
  return (
    <>
      {' '}
      <button onClick={(getRecipes(), notify)}>Start to cook</button>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />{' '}
    </>
  );
}

export default Tostatus;
