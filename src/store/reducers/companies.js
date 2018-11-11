import * as actionTypes from '../actions/actionTypes';
import { getCompany } from '../selectors/companies';
import { getCompanyReviews } from '../selectors/reviews';

// These should be obtained by fetching from the server
const initialState = {
  '1': {
    id: '1',
    name: 'Google',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Et aperiam libero eius ad, porro harum dignissimos nesciunt vitae
            nisi culpa maiores dolore aut accusamus quis quae corrupti error,
            possimus. A.`,
    average: 4.2
  },
  '2': {
    id: '2',
    name: 'Amazon',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Et aperiam libero eius ad, porro harum dignissimos nesciunt vitae
            nisi culpa maiores dolore aut accusamus quis quae corrupti error,
            possimus. A.`,
    average: 4.1
  },
  '3': {
    id: '3',
    name: 'Exportas',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Et aperiam libero eius ad, porro harum dignissimos nesciunt vitae
            nisi culpa maiores dolore aut accusamus quis quae corrupti error,
            possimus. A.`,
    average: 5.0
  },
  '4': {
    id: '4',
    name: 'Reviews',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Et aperiam libero eius ad, porro harum dignissimos nesciunt vitae
            nisi culpa maiores dolore aut accusamus quis quae corrupti error,
            possimus. A.`,
    average: 4.5
  },
  '5': {
    id: '5',
    name: 'Lysol',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Et aperiam libero eius ad, porro harum dignissimos nesciunt vitae
              nisi culpa maiores dolore aut accusamus quis quae corrupti error,
              possimus. A.`,
    average: 4.0
  }
};

const recalculateAverageForCompany = (localState, action, globalState) => {
  const { review } = action.payload;
  const companyId = review.companyId;
  // Could also use localState[companyId], since this reducer manages this
  // slice of the state. However, selectors are used for consistency.
  const company = getCompany(globalState, companyId);
  const companyReviews = getCompanyReviews(globalState, companyId);
  const average = (
    companyReviews.reduce((acc, review) => acc + parseFloat(review.rating), 0) /
    companyReviews.length
  ).toFixed(2);
  const updatedCompany = { ...company, average };
  const newState = { ...localState, [companyId]: updatedCompany };

  return newState;
};

const reducer = (localState = initialState, action, globalState) => {
  switch (action.type) {
    case actionTypes.ADD_REVIEW:
      return recalculateAverageForCompany(localState, action, globalState);

    default:
      return localState;
  }
};

export default reducer;
