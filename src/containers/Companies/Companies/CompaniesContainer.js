import React from 'react';
import { getCompanies } from '../../../store/selectors/companies';
import CompanyList from '../../../components/Companies/CompanyList/CompanyList';
import withPagination from '../../../HOC/withPagination';
import { connect } from 'react-redux';

class CompaniesContainer extends React.Component {
  render() {
    return (
      <CompanyList
        companies={this.props.paginationData.shownItems}
        paginationData={this.props.paginationData}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: getCompanies(state)
  };
};

export default connect(mapStateToProps)(
  withPagination(CompaniesContainer, { itemsCountPerPage: 3 })
);
