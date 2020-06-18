import { call, put, takeEvery } from 'redux-saga/effects';
import actionTypes from '../actions';
//import { loadingStart, loadingSuccess, loadingError } from '../actionCreators/actionCreatorSaga';


// Функция-работник.
function* loadImage() {
  try {
   // yield put(loadingStart());
   // const result = yield call(fetchImage);
   // yield put(loadingSuccess(result[0].url));
  } catch (error) {
  //  yield put(loadingError(error.message));
  }
}

// Функция-наблюдатель.
function* saga() {
  yield takeEvery(actionTypes.loadImageSaga, loadImage);
}

export default saga;
