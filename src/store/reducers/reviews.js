import * as actionTypes from '../actions/actionTypes';

// These should be obtained by fetching from the server
const initialState = {
  '1': {
    id: '1',
    companyId: '1',
    userId: '1',
    rating: '4',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Autem similique laboriosam ratione magni perferendis facilis eius
            architecto, quaerat harum tenetur possimus commodi, illum atque
            quas nisi. Incidunt iure, labore nihil!`,
    title: 'I had a great time looking for things!',
    createdAt: '11/10/2009'
  },
  '2': {
    id: '2',
    companyId: '1',
    userId: '2',
    rating: '3',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Autem similique laboriosam ratione magni perferendis facilis eius
            architecto, quaerat harum tenetur possimus commodi, illum atque
            quas nisi. Incidunt iure, labore nihil!`,
    title: 'So so, hehe.',
    createdAt: '12/10/2009'
  },
  '3': {
    id: '3',
    companyId: '1',
    userId: '1',
    rating: '5',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Autem similique laboriosam ratione magni perferendis facilis eius
            architecto, quaerat harum tenetur possimus commodi, illum atque
            quas nisi. Incidunt iure, labore nihil!`,
    title: 'I liked it a lot!.',
    createdAt: '14/10/2009'
  }
};

const addReview = (localState, action, globalState) => {
  const { review } = action.payload;

  // Set by the server
  const id = Date.now();
  const today = new Date();
  const createdAt = `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}`;

  // Set by currentUser
  const userId = '1';

  const newReview = { [id]: { id, userId, createdAt, ...review } };
  const newState = {
    ...localState,
    ...newReview
  };

  return newState;
};

const reducer = (localState = initialState, action, globalState) => {
  switch (action.type) {
    case actionTypes.ADD_REVIEW:
      return addReview(localState, action, globalState);

    default:
      return localState;
  }
};

export default reducer;
