import React, {useEffect, useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';

function Status() {
  const dispatch = useDispatch();
  const stat = useSelector((state) => state.user.status);
  const [status, setStatus] = useState(stat)

  useEffect(() => {
    async function status() {
      const response = await fetch("recipe/status", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const result = await response.json();
        console.log(result);
        
      setStatus(result.data)
      return result;
    }
     status();
  }, [])

  return (
    <div className='userStatus'>
      <p>Сейчас готовит: {status}</p>
    </div>
  );
}
export default Status;
