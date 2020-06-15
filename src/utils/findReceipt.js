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
  console.log(result);
}

export default findReceipt;

//пользователь вводит ингридиент
//
