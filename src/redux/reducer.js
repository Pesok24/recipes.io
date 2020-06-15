import actionType from './actions';
import doFetch from '../fetchFunc';

const defaultState = {
  statusSession: false,
  user: {
    name: '',
    id: '',
    image: 'http://interra.tv/static/images/no-ava.png',
  },
  isLoading: null,

  mainrecipe: { reviews: [], ingridients: [] },
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
      const user = {
        name: action.session.name,
        id: action.session._id,
        img: action.session.image,
      };

      return {
        ...state,
        statusSession: true,
        user: user,
      };

    case 'MAINRECIPE':
      const data = action.mainrecipe;
      return {
        ...state,
        mainrecipe: data,
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
