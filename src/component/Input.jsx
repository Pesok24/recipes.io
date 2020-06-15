import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TagInput } from 'reactjs-tag-input';

function Input() {
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  function onTagsChanged(tags) {
    setTags(tags);
  }

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
  return (
    <>
       <form onSubmit={(e) => findReceipt(e, text)}>
        <input
          type='text'
          id='MainInput'
          placeholder='Укажите имеющиеся ингридиенты'
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type='submit' value='Искать' />
      </form>
      <div className='tags'>
        <TagInput tags={tags} onTagsChanged={onTagsChanged} />
      </div>
      <p>и мы подберем подходящие рецепты</p>
    </>
  );
}

export default Input;
