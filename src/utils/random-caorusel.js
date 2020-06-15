async function carouselLoader() {
  const responce = await fetch('recipe/all');
  const result = await responce.json();
  return result;
}

export default carouselLoader;
