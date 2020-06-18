import action from '../actions';

function loadingStart() {
  return { type: action.loadingStart };
}

function loadingSuccess(url) {
  return { type: action.loadingSuccess, url };
}

function loadingError(errorMessage) {
  return { type: action.loadingError, errorMessage };
}

function carouselLoader() {

  return async (dispatch) => {
    try {
      dispatch(loadingStart());
      const responce = await fetch('/recipe/all');
      const result = await responce.json();
      console.log(result);
      dispatch(loadingSuccess(result));
    } catch (error) {
      dispatch(loadingError(error.message));
    }
  };
}

export default carouselLoader;
