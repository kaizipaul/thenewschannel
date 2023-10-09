// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'; // For asynchronous actions
import { composeWithDevTools } from 'redux-devtools-extension'; // For Redux DevTools Extension

// Import your reducers here
// import exampleReducer from './reducers/exampleReducer';

// Combine your reducers into one root reducer
const rootReducer = combineReducers({
  // example: exampleReducer,
  // Add other reducers here
});

// Middleware configuration
const middlewares = [thunkMiddleware]; // You can add more middleware if needed

// Create the Redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
