import actionTypes from '../actions';

// Это тригерит саму сагу.
export function loadImageSaga() {
  return { type: actionTypes.loadImageSaga };
}

// Эти сага вызывает с помощью put() в тех или иных случаях.
export function loadingStart() {
  return { type: actionTypes.loadingStart };
}

export function loadingSuccess(url) {
  return { type: actionTypes.loadingSuccess, url };
}

export function loadingError(errorMessage) {
  return { type: actionTypes.loadingError, errorMessage };
}
