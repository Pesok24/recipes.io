import actionType from './actions';
import doFetch from '../fetchFunc';
import action from './actions';

const defaultState = {
  statusSession: false,
  user: {
    name: '',
    id: '',
    image: 'https://7themes.su/img/no-ava.png',
  },
  status: { status: 'user is free rigth now', id: 0 },
  isLoading: false,
  mainrecipe: { reviews: [], ingridients: [] },
  reviews: [{ text: 'dfdwef', author: { name: '' } }],
  superinput: false,
  steps: [{ steps: [{ step: [{ steps: ['qwe'] }] }] }],
  errorMessage: null,
  carousel: [{ reviews: [], ingridients: [] }],
};

async function logOut() {
  await fetch('/logout', {
    method: 'POST',
  });
}

const getFetch = async () => {
  const resp = await doFetch();
  // console.log(resp);
  return resp[0];
};
console.log(action.url);

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'STATUS':
      return {
        ...state,
        status: { status: action.status, id: action.id },
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

    case 'SUPERINPUT-T':
      return {
        ...state,
        superinput: true,
      };

    case 'SUPERINPUT-F':
      return {
        ...state,
        superinput: false,
      };

    case 'MAINRECIPE':
      const data = action.mainrecipe;
      return {
        ...state,
        mainrecipe: data,
      };

    case 'CHANGE_NAME':
      return {
        ...state,
        user: { ...state.user, name: action.name },
      };

    case 'REVIEWS':
      return {
        ...state,
        reviews: action.reviews,
      };

    // case "CHANGE_IMG":
    // return {
    //     ...state,
    //     user: { image: action. }
    // }

    case 'STEPS':
      return {
        ...state,
        steps: [{ steps: [{ step: action.steps }] }],
      };

    case 'LOGOUT':
      logOut();
      localStorage.setItem('session', false);

      localStorage.setItem('user.name', '');
      return { ...state, statusSession: false, user: { name: '' } };

    case 'loadingStart':
      return {
        ...state,
        isLoading: true,
        carousel: [{ reviews: [], ingridients: [] }],

        errorMessage: null,
      };
    case 'loadingSuccess':
      return {
        ...state,
        carousel: action.url,
        mainrecipe: action.url[16],
        isLoading: false,
        errorMessage: null,
      };
    case action.loadingError:
      return {
        ...state,
        errorMessage: action.errorMessage,
        carousel: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
