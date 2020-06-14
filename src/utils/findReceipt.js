async function findReceipt(value) {
  const responce = await fetch('recipe/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: value }),
  });
  console.log(value);
  const result = await responce.json();
}

export default findReceipt;

//пользователь вводит ингридиент
//
