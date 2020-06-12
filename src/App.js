import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './component/profile/Login';
import Home from './component/Home';
import NavBar from './component/NavBar';
import SingUp from './component/profile/SingUp';
import { loadSaga } from './redux/actioncreators/actionsSaga';
import './App.css';
import MainPage from './components2/MainPage';

function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    async function question() {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      const result = await response.json();

      if (result.session) {
        dispatch({ type: 'LOGIN', session: result.session });
        const user = result.session.name;
        localStorage.setItem('session', true);
        localStorage.setItem('user', user);
      } else {
        localStorage.setItem('session', false);
        localStorage.setItem('user', '');
      }
    }
    question();
    dispatch(loadSaga());
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar user={store.user} />
        <Route exact path='/'>
          <Home />
        <MainPage />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/singup'>
          <SingUp />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
