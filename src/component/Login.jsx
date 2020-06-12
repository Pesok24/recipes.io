import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Login(props) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [messe, setMess] = useState();
  const history = useHistory();

  async function loginSubmit(event) {
    event.preventDefault();

    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
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
      setMess('Неверный Логин или Пароль');
    }
  }

  return (
    <div className='container ' id='login'>
      <form onSubmit={loginSubmit}>
        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
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
            id='exampleInputPassword1'
            placeholder='Password'
            name='password'
            required
          />
          <div>{messe} </div>
        </div>
        <button type='submit' className='btn btn-outline-primary'>
          Login
        </button>
      </form>
    </div>
  );
}
