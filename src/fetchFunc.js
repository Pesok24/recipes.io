
const doFetch = async (id) => {
  
  // const responce = await fetch("data", {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // });
  const responce = await fetch("http://localhost:3000/recipe/link", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)

    });
  const result = await responce.json();
  return result;
};

export default doFetch
