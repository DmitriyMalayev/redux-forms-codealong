import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(manageTodo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


/* 
Provider 
Makes the Redux store available to the connect() calls in the component hierarchy below.

createStore
Creates a Redux store that holds the state tree. 
The only way to change the data in the store is to call dispatch() on it.  There should only be a single store in your app. To specify how different parts of the state tree respond to actions, you may combine several reducers into a single reducer function by using combineReducers.
*/