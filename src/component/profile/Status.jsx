import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Status() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);

  return (
    <div className='userStatus'>
      {status} <span class='changeStatus' onClick={() => }>Изменить статус</span>
    </div>
  );
}
export default Status;
