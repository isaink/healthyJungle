import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger'

import RootReducer from '../Redux_Reducer/RootReducer';


// const store = createStore(RootReducer, {}, applyMiddleware(
//     // compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// ))


const store = createStore(RootReducer, {}, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

export default store;