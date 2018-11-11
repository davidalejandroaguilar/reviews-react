import * as actionTypes from './actionTypes';

export const addReviewActionCreator = review => {
  return {
    type: actionTypes.ADD_REVIEW,
    payload: {
      review
    }
  };
};

// "Action creator" that returns a function instead of an action, this
// function is then intercepted by Thunk middleware, the action is stopped and
// the function run. Which will now contain a dispatch with a normal action
// and won't be intercepted by Thunk, allowing the action to continue.
export const addReview = review => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dispatch(addReviewActionCreator(review)));
      }, 100);
    });
  };
};
