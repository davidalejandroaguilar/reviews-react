import React from 'react';
import { addReview } from '../../../store/actions/index';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import NewReview from '../../../components/Reviews/NewReview/NewReview';

const NewReviewContainer = props => {
  const MINIMUM_REVIEW_LENGTH = 10;

  const initialValues = {
    title: '',
    description: '',
    rating: '',
    companyId: props.companyId
  };

  // Should use Yup, but in the meantime...
  const validate = values => {
    const errors = {};

    if (![1, 2, 3, 4, 5].includes(Number(values.rating)) || !values.rating) {
      errors.rating = 'Rating is required';
    } else if (!values.title) {
      errors.title = 'Title is required';
    } else if (!values.description) {
      errors.description = 'Review is required';
    } else if (values.description.trim().length < MINIMUM_REVIEW_LENGTH) {
      errors.description = `Too short (min ${MINIMUM_REVIEW_LENGTH} chars)`;
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={props.addReview}
      render={formikProps => (
        <NewReview
          minimumReviewLength={MINIMUM_REVIEW_LENGTH}
          {...formikProps}
        />
      )}
    />
  );
};

const mapDispatchToProps = dispatch => {
  const submitForm = (values, actions) => {
    dispatch(addReview(values)).then(() => {
      actions.setSubmitting(false);
      actions.resetForm();
    });
  };

  return {
    addReview: (values, actions) => submitForm(values, actions)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewReviewContainer);
