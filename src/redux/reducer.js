import actionType from './actions';

const defaultState = {
  statusSession: false,
  user: { name: '' },
  isLoading: null,
  todos: [],
};

async function logOut() {
  await fetch('/logout', {
    method: 'POST',
  });
}

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
