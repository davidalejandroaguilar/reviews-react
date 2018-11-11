import React from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';
import styles from './CompanyList.module.css';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap';

const CompanyList = props => (
  <section>
    <h1>Companies</h1>

    <div className={styles.Container}>
      {props.companies.map(company => (
        <Row key={company.id}>
          <Col xs="12">
            <CompanyCard company={company} />
          </Col>
        </Row>
      ))}
    </div>
  </section>
);

CompanyList.propTypes = {
  companies: PropTypes.array
};

export default CompanyList;
