const inputFetch = async (text) => {
  
  // const responce = await fetch("data", {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // });
  const responce = await fetch("http://localhost:3000/recipe/review", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(text)
    });
  const result = await responce.json();
  
  return result;
};

export default inputFetch
