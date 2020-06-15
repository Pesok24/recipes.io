import React, { useState } from 'react';
import findReceipt from '../utils/findReceipt';

function Input() {
  const [text, setText] = useState('');
  const [data, setData] = useState({ reviews: [], ingridients: [] });

  async function findReceipt(value) {
    const responce = await fetch('recipe/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: value }),
    });
    console.log(responce);
    const result = await responce.json();
    setData(result);
  }

  if (!data.ingridients.length === 0) {
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
  } else {
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
        <div>
          <h2 class='carouselTitle'>Пользователи выбирают</h2>
          <div className='mainDiv'>
            <img src={data.image} alt={data.title} className='main-page-img' />

            <p>
              <h3>
                {data.title}
                {}
              </h3>
              {data.recipe}
              <br />
              <span class='likes'>🙂 {data.reviews.length}</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Input;
