import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export default function NavBar(props) {
  const store = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark'>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='d-flex justify-content-end'>
        <ul className='navbar-nav mr-auto'>
          {store.name ? (
            <NavDropdown title={store.name} id='basic-nav-dropdown'>
              <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  dispatch({ type: 'LOGOUT' });
                }}
              >
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <li className='nav-item '>
                <Link className='nav-link' to='/singup'>
                  {' '}
                  Sing Up{' '}
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  {' '}
                  Login{' '}
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
