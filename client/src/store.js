import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};

// const middleware = [thunk];

const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk] :
  [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;