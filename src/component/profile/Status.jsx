import React, {useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

function Status(props) {
  const dispatch = useDispatch();
  // const stat = useSelector((state) => state.user.status);
  const user = useSelector((state) => state.user);
  const [status, setStatus] = useState(user.status)
  
  
  useEffect(() => {
    async function status() {
      
      const response = await fetch("recipe/status", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, body: JSON.stringify({id: user.id})
        });
        const result = await response.json();
        
      setStatus(result.data)
      return result;
    }
     status();
  }, [user])

  return (
    <div className='userStatus'>
      <p>Сейчас готовит: {status}</p>
    </div>
  );
}
export default Status;
