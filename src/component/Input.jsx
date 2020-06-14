import React, { useState } from 'react';
import findReceipt from '../utils/findReceipt';

const Input = () => {
  const [text, setText] = useState('');
  return (
    <>
      <input
        type='text'
        id='MainInput'
        placeholder='Укажите имеющиеся ингридиенты'
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => findReceipt(text)}>Искать</button>
      <p>и мы подберем подходящие рецепты</p>
    </>
  );
};

export default Input;
