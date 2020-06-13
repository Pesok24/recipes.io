import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { loadSaga } from '../redux/actioncreators/actionsSaga';
import Carousel from './carousels/random';

export default function Home() {
  const store = useSelector((state) => state.todos);
  const load = useSelector((state) => state.isLoading);
  const session = localStorage.getItem('session');
  const dispatch = useDispatch();
  const history = useHistory();
  if (session === 'false') {
    history.push('/login');
  }
  return '';
}
