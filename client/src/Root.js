import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Store/reducers';
import thunk from 'redux-thunk';


// const composeEnhancers =
//   typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

    const composeEnhancers = compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);


export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducer,
    initialState,
    enhancer
  );

  return <Provider store={store}>{children}</Provider>;
};