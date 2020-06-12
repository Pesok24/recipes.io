import actionType from './actions';

const defaultState = {
  statusSession: false,
  user: null,
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
    case actionType.todo:
      const todo = { todo: action.todo };
      return {
        ...state,
        todos: todo.todo,
        isLoading: false,
      };

    case 'LOGIN':
      const user = { name: action.session.name };
      return {
        ...state,
        statusSession: true,
        user: user,
      };
    case 'LOGOUT':
      logOut();
      localStorage.setItem('session', false);
      localStorage.setItem('user', '');
      return { ...state, statusSession: false, user: null };
    default:
      return state;
  }
};

export default reducer;
