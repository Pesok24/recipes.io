import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Superinput from './Superinput';

function Input() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const superinput = useSelector((state) => state.superinput);

  async function findReceipt(e, text) {
    e.preventDefault();
    const responce = await fetch('recipe/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: text }),
    });

    const result = await responce.json();
    dispatch({ type: 'MAINRECIPE', mainrecipe: result.data[0] });
  }

  console.log(text);
  if (!superinput) {

    return (
      <>
        <input
          type='text'
          id='MainInput'
          placeholder='Укажите имеющиеся ингридиенты'
          onClick={(e) => dispatch({ type: 'SUPERINPUT-T' })}
          required
        />

        <p>и мы подберем подходящие рецепты</p>
      </>
    );
  } else {
    return (
      <>
        <input
          type='text'
          id='MainInput'
          placeholder='Укажите имеющиеся ингридиенты'
          required
        />

        <p>и мы подберем подходящие рецепты</p>

        <div className='container-div'>
          <Superinput />
        </div>
      </>
    );
  }
}

export default Input;
