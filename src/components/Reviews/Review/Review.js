import React from 'react';
import styles from './Review.module.css';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';
import ReadMoreLess from 'react-read-more-less';
import './Review.module.css';

const MAX_DESCRIPTION_LENGTH = 200;

const Review = props => {
  return (
    <Card className={styles.ReviewCard}>
      <CardBody>
        <div className={styles.ReviewCardBodyHeader}>
          <CardTitle className={styles.ReviewCardTitle}>
            {props.review.title}
          </CardTitle>
          <div>{props.review.rating} / 5</div>
        </div>
        <CardSubtitle className={styles.ReviewCardSubTitle}>
          <div className={styles.ReviewCardAuthor}>{props.user.name}</div>
          <div className={styles.ReviewCardDate}>
            {new Date(props.review.createdAt).toDateString()}
          </div>
        </CardSubtitle>
        <ReadMoreLess
          readLessText=" Read less"
          charLimit={MAX_DESCRIPTION_LENGTH}>
          {props.review.description}
        </ReadMoreLess>
      </CardBody>
    </Card>
  );
};

Review.propTypes = {
  user: PropTypes.object,
  review: PropTypes.object
};

export default Review;
