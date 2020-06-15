const doFetch = async () => {
  console.log('1');
  
  // const responce = await fetch("data", {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // });
  const responce = await fetch("recipe/all", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
  const result = await responce.json();
  return result;
};

export default doFetch
