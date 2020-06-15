import actionType from './actions';
import doFetch from '../fetchFunc';

const defaultState = {
  statusSession: false,
  user: { name: '' },
  isLoading: null,
  todos: [],
  recipe: {}
};

async function logOut() {
  await fetch('/logout', {
    method: 'POST',
  });
}

const getFetch = async () => {
  const resp = await doFetch();
  // console.log(resp);
  return resp[0]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.start:
      return {
        ...state,
        isLoading: true,
      };

    case 'LOGIN':
      const user = { name: action.session.name };
      console.log(user);
      return {
        ...state,
        statusSession: true,
        user: user,
      };

    case 'LOGOUT':
      logOut();
      localStorage.setItem('session', false);

      localStorage.setItem('user.name', '');
      return { ...state, statusSession: false, user: { name: '' } };

    default:
      return state;
  }
};

export default reducer;
