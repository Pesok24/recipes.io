import React, { useState } from 'react';
import doFetch from '../../fetchFunc';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

const Ingredients = (props) => {

  // const [ingerd, setIngerd] = useState([])

  // useEffect(() => {
  //   const getFetch = async () => {
  //     const resp = await doFetch();
  //     console.log(resp[0].ingridients);
  //     setIngerd(resp[0].ingridients);
  //   };
  //   getFetch();
  // }, []);

  
 
  const ingerd = props.data.ingridients

  let i = 0

  return ( 
    <div id='ingredients'>
      <ListGroup>
        <ListGroup.Item><b>Ingredients:</b></ListGroup.Item>
      {ingerd.map((e) => {
        i++
        return (
        <ListGroup.Item><b>{i}.</b> {e.name}</ListGroup.Item>
        )
      })}
      </ListGroup>
    </div>
   );
}
 
export default Ingredients;
