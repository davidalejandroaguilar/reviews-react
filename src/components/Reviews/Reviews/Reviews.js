import React from 'react';
import ReviewContainer from '../../../containers/Reviews/Review/ReviewContainer';
import Pagination from 'react-js-pagination';
import styles from './Reviews.module.css';

const Reviews = props => (
  <div className={styles.ReviewsContainer}>
    <div className={styles.Reviews}>
      {props.reviews.map(review => (
        <ReviewContainer key={review.id} review={review} />
      ))}
    </div>

    <div className={styles.ReviewsPagination}>
      <Pagination
        activePage={props.activePage}
        itemsCountPerPage={props.reviewsPerPage}
        totalItemsCount={props.totalReviewsCount}
        onChange={props.handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
        prevPageText="Previous"
        nextPageText="Next"
      />
    </div>
  </div>
);

export default Reviews;
