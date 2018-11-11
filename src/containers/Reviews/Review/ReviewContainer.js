import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../../store/selectors/users';
import Review from '../../../components/Reviews/Review/Review';

const ReviewContainer = props => (
  <Review user={props.user} review={props.review} />
);

const mapStateToProps = (state, props) => {
  return {
    user: getUser(state, props.review.userId)
  };
};

export default connect(mapStateToProps)(ReviewContainer);
