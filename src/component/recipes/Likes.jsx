import React from 'react';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Likes = () => {
  const [like, setLike] = useState(0);
  const user = useSelector((state) => state.user);
  const allParams = useParams();

  async function fetchData() {
    const response = await fetch('http://localhost:3000/recipe/getlikes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: allParams.id }),
    });
    const dataLikes = await response.json();
    setLike(dataLikes.length);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Button
      variant='light'
      onClick={() => {
        const updateLikes = async () => {
          const response = await fetch('http://localhost:3000/recipe/addtomy', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: user.id, recipeId: allParams.id }),
          });
          const result = await response.json();
          console.log(result);
          setLike(result.data.length);
        };
        updateLikes();
      }}
    >
      <span role='img'>❤️{like}</span>
    </Button>
  );
};

export default Likes;
