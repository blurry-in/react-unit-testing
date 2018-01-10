import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import AppContainer from './containers/AppContainer';
import AppReducer from './reducers/AppReducer';

const combinedReducers = combineReducers({
  AppReducer,
});
const store = createStore(combinedReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
