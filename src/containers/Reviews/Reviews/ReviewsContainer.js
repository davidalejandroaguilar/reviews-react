import React from 'react';
import Reviews from '../../../components/Reviews/Reviews/Reviews';

const REVIEWS_PER_PAGE = 3;

class ReviewsContainer extends React.Component {
  state = {
    activePage: 1
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  render() {
    const indexOfLastReview = this.state.activePage * REVIEWS_PER_PAGE;
    const indexOfFirstReview = indexOfLastReview - REVIEWS_PER_PAGE;
    const shownReviews = this.props.reviews.slice(
      indexOfFirstReview,
      indexOfLastReview
    );

    return (
      <Reviews
        reviews={shownReviews}
        activePage={this.state.activePage}
        totalReviewsCount={this.props.reviews.length}
        reviewsPerPage={REVIEWS_PER_PAGE}
        handlePageChange={this.handlePageChange}
      />
    );
  }
}

export default ReviewsContainer;
