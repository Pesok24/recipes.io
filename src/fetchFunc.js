const doFetch = async () => {
  const responce = await fetch("recipe/all", {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await responce.json();
  return result;
};

export default doFetch
