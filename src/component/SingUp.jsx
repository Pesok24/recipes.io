import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

export default function SingUp(props) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [messe, setMess] = useState();
  const history = useHistory();

  async function singUp(event) {
    event.preventDefault();

    const response = await fetch('/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      }),
    });
    const result = await response.json();
    if (result.status === 200) {
      dispatch({ type: 'LOGIN', session: result.session });

      const user = result.session.name;
      localStorage.setItem('session', true);
      localStorage.setItem('user', user);

      history.push('/');
    } else {
      setMess(`${result.error} , Уже Занян`);
    }
  }

  return (
    <div className='container' id='login'>
      <form onSubmit={singUp}>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            className='form-control '
            name='name'
            placeholder='Name'
            required
          />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter email'
            name='email'
            required
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            id='inputPassword3'
            name='password'
            required
            placeholder='Password'
          />
          <div>{messe}</div>
        </div>

        <div className='form-group'>
          <input
            className='btn btn-outline-primary'
            type='submit'
            value='Sign Up'
          />
        </div>
      </form>
    </div>
  );
}
