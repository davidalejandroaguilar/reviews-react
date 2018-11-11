// This should be fetched from the server using the company id instead of
// receiving ALL the reviews and then filtering.
export const getReviews = state => Object.values(state.reviews);

export const getCompanyReviews = (state, companyId) => {
  const reviews = getReviews(state);

  return reviews.filter(review => review.companyId === companyId);
};
