import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { loadSaga } from '../redux/actioncreators/actionsSaga';

export default function Home() {
  const store = useSelector((state) => state.todos);
  const load = useSelector((state) => state.isLoading);
  const session = localStorage.getItem('session');
  const dispatch = useDispatch();
  const history = useHistory();
  if (session === 'false') {
    history.push('/login');
  }
  return (
    <>
      <div></div>
      {load ? (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ) : (
        <div className='div-table'>
          {store.map((item) => {
            return (
              <Fragment key={item._id}>
                <div className='container'>
                  <input type='checkbox' />
                  <span> {item.title}</span>
                </div>
              </Fragment>
            );
          })}
        </div>
      )}
    </>
  );
}
