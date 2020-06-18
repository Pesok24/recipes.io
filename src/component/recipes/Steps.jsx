import React, { useState } from 'react';
import doFetch from '../../fetchFunc';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Steps = (props) => {
  // const steps = props.data.steps||[]

  // const [ingerd, setIngerd] = useState([])

  // useEffect(() => {
  //   const getFetch = async () => {
  //     const resp = await doFetch();
  //     console.log(resp[0].ingridients);
  //     setIngerd(resp[0].ingridients);
  //   };
  //   getFetch();
  // }, []);
  const recipeState = useSelector(state => state.steps)
  console.log(recipeState);
  

  //   useEffect(() => {

  // }, []);



 const steps = recipeState[0].steps[0].step[0].steps

  let i = 0

  return ( 
    <div className='ingredients'>
      <ListGroup>
  <ListGroup.Item><b>Steps:</b></ListGroup.Item>
      {steps.map((e) => {
        i++
        return (
        <ListGroup.Item><b>{i}.</b> {e.step}</ListGroup.Item>
        )
      })}
      </ListGroup>
    </div>
   );
}
 
export default Steps;
