import React from 'react';
import { connect } from 'react-redux';
import Company from '../../../components/Companies/Company/Company';

import { getCompany } from '../../../store/selectors/companies';
import { getCompanyReviews } from '../../../store/selectors/reviews';

const CompanyContainer = props => (
  <Company company={props.company} reviews={props.reviews} />
);

const byNewest = (reviewA, reviewB) => {
  return Date.parse(reviewA.createdAt) < Date.parse(reviewB.createdAt) ? 1 : -1;
};

const mapStateToProps = (state, props) => {
  return {
    company: getCompany(state, props.match.params.id),
    reviews: getCompanyReviews(state, props.match.params.id).sort(byNewest)
  };
};

export default connect(mapStateToProps)(CompanyContainer);
