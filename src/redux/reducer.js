import actionType from './actions';
import doFetch from '../fetchFunc';

const defaultState = {
  statusSession: false,
  user: null,
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
      case actionType.getRecipe:
        const newRecipe = getFetch();
        return {
          recipe: newRecipe
        }
    default:
      return state;
  }
};

export default reducer;
