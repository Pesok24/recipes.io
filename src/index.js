import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './redux/reducer';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import sagas from './redux/saga/sagas';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './component/ErrorBoundary';

// Пример saga.

const sagaMiddleware = createSagaMiddleware();
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, enhancers);

// Пример saga.
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
