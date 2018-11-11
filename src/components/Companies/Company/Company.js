import React from 'react';
import { Row, Col, Badge } from 'reactstrap';
import PropTypes from 'prop-types';

import NewReviewContainer from '../../../containers/Reviews/NewReview/NewReviewContainer';
import ReviewsContainer from '../../../containers/Reviews/Reviews/ReviewsContainer';
import styles from './Company.module.css';

const Company = props => {
  return (
    <section className={styles.Section}>
      <Row>
        <Col md="6" lg="4">
          <aside>
            <img src="https://via.placeholder.com/300" alt="" />
          </aside>

          <NewReviewContainer companyId={props.company.id} />
        </Col>

        <Col md="6" lg="8">
          <div className={styles.DetailsContainer}>
            <div className={styles.DetailsText}>
              <h1>
                <span>{props.company.name} &nbsp;</span>
                <Badge color="dark">{props.company.average}</Badge>
              </h1>
              <p>{props.company.description}</p>
            </div>
          </div>

          <ReviewsContainer reviews={props.reviews} />
        </Col>
      </Row>
    </section>
  );
};

Company.propTypes = {
  company: PropTypes.object,
  reviews: PropTypes.array
};

export default Company;
