import React from 'react';
import { useSelector } from 'react-redux';
import Status from './Status';

function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div>
        <div className='userImage'>
          <img alt='Фото профиля' />
        </div>
        <div className='userName'>{user.name}</div>
      </div>
    </>
  );
}

export default Profile;
