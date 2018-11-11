import React from 'react';
import { getCompanies } from '../../../store/selectors/companies';
import CompanyList from '../../../components/Companies/CompanyList/CompanyList';

import { connect } from 'react-redux';

const CompanyListContainer = props => (
  <CompanyList companies={props.companies} />
);

const mapStateToProps = state => {
  return {
    companies: getCompanies(state)
  };
};

export default connect(mapStateToProps)(CompanyListContainer);
