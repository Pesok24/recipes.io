const updatePhoto = async (src) => {
  
  // const responce = await fetch("data", {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  // });
  const responce = await fetch("http://localhost:3000/recipe/updatePhoto", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(src)
    });
  const result = await responce.json();
  
  return result;
};

export default updatePhoto
