import React, { useEffect } from 'react';

function AddRecipe() {
  const [recipe, setRecipe] = useState('');
  function addNewRecipe(recipe) {}
  return (
    <>
      <form onChange={setRecipe} onSubmit={() => addNewRecipe()}>
        <input type='text' placeholder='Название рецепта' />
        <br />
        <textarea placeholder='Ингридиенты через запятую'></textarea>
        <br />
        <input type='file' />
        <br />
        Расскажите в кратце, как приготовить это блюдо
        <br />
        <textarea placeholder='Шаг 1. Расскажите, как готовить блюдо'></textarea>
        <textarea placeholder='Шаг 2. Расскажите, как готовить блюдо'></textarea>
        <textarea placeholder='Шаг 3. Расскажите, как готовить блюдо'></textarea>
        <textarea placeholder='Шаг 4. Расскажите, как готовить блюдо'></textarea>{' '}
        <button type='submit'>Добавить этот рецепт</button>{' '}
      </form>
    </>
  );
}

export default AddRecipe;
