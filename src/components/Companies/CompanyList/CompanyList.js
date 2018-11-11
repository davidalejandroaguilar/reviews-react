import React from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';
import styles from './CompanyList.module.css';
import PropTypes from 'prop-types';
import SearchContainer from '../../../containers/Search/SearchContainer';
import Pagination from 'react-js-pagination';

import { Row, Col } from 'reactstrap';

const CompanyList = props => {
  return (
    <section>
      <h1>Companies</h1>

      <SearchContainer />

      <div className={styles.Container}>
        {props.companies.map(company => (
          <Row key={company.id}>
            <Col xs="12">
              <CompanyCard company={company} />
            </Col>
          </Row>
        ))}
      </div>

      <Pagination
        activePage={props.paginationData.activePage}
        itemsCountPerPage={props.paginationData.itemsCountPerPage}
        totalItemsCount={props.paginationData.totalItemsCount}
        onChange={props.paginationData.handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        prevPageText="Previous"
        nextPageText="Next"
      />
    </section>
  );
};

CompanyList.propTypes = {
  companies: PropTypes.array
};

export default CompanyList;
