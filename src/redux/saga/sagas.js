import { call, put, takeEvery } from 'redux-saga/effects';
import { loadingStart } from '../actioncreators/actionsSaga';
import actionType from '../actions';


function* loadTodo() {
  try {
    yield put(loadingStart());
   // const result = yield call(fetchTodo);
  } catch (error) {
    console.log(error);
  }
}

// Функция-наблюдатель.
function* sagas() {
  yield takeEvery(actionType.saga, loadTodo);
}

export default sagas;
