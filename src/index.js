import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './HOC/ScrollToTop';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import companies from './store/reducers/companies';
import reviews from './store/reducers/reviews';
import users from './store/reducers/users';

// Custom combined reducer to pass global state to all reducers in case they
// need it.
const combinedReducer = (state = {}, action) => {
  return {
    companies: companies(state.companies, action, state),
    reviews: reviews(state.reviews, action, state),
    users: users(state.users, action, state)
  };
};

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middlware] next state', store.getState());

      return result;
    };
  };
};

const store = createStore(combinedReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
