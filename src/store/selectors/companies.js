export const getCompanies = state => {
  return Object.values(state.companies);
};

// This should perhaps fetch the company from the server using the id instead
// of receiving ALL the companies and then filtering.
export const getCompany = (state, id) => {
  // Does not use getCompanies() so that O(1) lookup can be made. Otherwise, we
  // would have to filter O(n).
  const companies = state.companies;

  return companies[id];
};
