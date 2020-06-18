import React, { useEffect, useState, Link } from 'react';

import { useDispatch, useSelector } from 'react-redux';

function Status(props) {
  const dispatch = useDispatch();
  // const stat = useSelector((state) => state.user.status);
  const user = useSelector((state) => state.user);
  const status = useSelector((state) => state.status);

  useEffect(() => {
    async function status() {
      const response = await fetch('recipe/status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: user.id }),
      });
      let result = await response.json();
      console.log(result);
      dispatch({ type: 'STATUS', status: result.data, id: result.id });
    }
    status();
  }, [user]);

  return (
    <div className='userStatus'>
      <p>Готовит: {status.status} </p>
    </div>
  );
}
export default Status;
