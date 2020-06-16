import React from 'react';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Likes = () => {

  const user = useSelector(state => state.user)
  console.log(user);
  const allParams = useParams()
  console.log(allParams);
  

  useEffect(() => {
    // const doFetch = () => {

    // }
  })

  return ( 
    <Button variant="light" onClick={() => {
      const updateLikes = async () => {
        const response = await fetch('http://localhost:3000/recipe/addtomy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId: user.id, recipeId: allParams.id })
        })
        const result = await response.json()
        console.log('Ответ на лайки',result);
        
      }
      updateLikes()
    }}><span role='img'>❤️</span></Button>
   );
}
 
export default Likes;
