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
  console.log('++++++++++++++',ingerd);
  
  let i = 0

  return ( 
    <div id='ingredients'>
      <ListGroup>
        <ListGroup.Item><b>Вам понадобится:</b></ListGroup.Item>
      {ingerd.map((e) => {
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
