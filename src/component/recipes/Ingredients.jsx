import React, { useState } from 'react';
import doFetch from '../../fetchFunc';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

const Ingredients = () => {

  const [ingerd, setIngerd] = useState([])

  useEffect(() => {
    const getFetch = async () => {
      const resp = await doFetch();
      console.log(resp[0].ingridients);
      setIngerd(resp[0].ingridients);
    };
    getFetch();
  }, []);

  return ( 
    <div id='ingredients'>
      <ListGroup>
        <ListGroup.Item><b>Вам понадобится:</b></ListGroup.Item>
      {ingerd.map((e) => {
        let i = '0'
        i++
        return (
        <ListGroup.Item>{i}. {e}</ListGroup.Item>
        )
      })}
      </ListGroup>
    </div>
   );
}
 
export default Ingredients;
