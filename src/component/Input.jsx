import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Superinput from './Superinput';

function Input() {
  const [text, setText] = useState('');
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

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
  if (!showInput) {
    return (
      <>
        <input
          type='text'
          id='MainInput'
          placeholder='Укажите имеющиеся ингридиенты'
          onClick={(e) => setShowInput(true)}
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
          onClick={(e) => setShowInput(true)}
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
