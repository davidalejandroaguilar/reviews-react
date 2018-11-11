import * as actionTypes from '../actions/actionTypes';

// These should be obtained by fetching from the server
const initialState = {
  '1': {
    id: '1',
    name: 'John Doe'
  },
  '2': {
    id: '2',
    name: 'Severus Snape'
  }
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
