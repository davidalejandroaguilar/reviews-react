import React from 'react';
import Reviews from '../../../components/Reviews/Reviews/Reviews';
import withPagination from '../../../HOC/withPagination';

const reviewsContainer = props => {
  return (
    <Reviews
      reviews={props.paginationData.shownItems}
      paginationData={props.paginationData}
    />
  );
};

export default withPagination(reviewsContainer, { itemsCountPerPage: 3 });
