async function carouselLike(id) {
  const responce = await fetch('/recipe/likecarousel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  });
  const result = await responce.json();
  return result;
}

export default carouselLike;
