import React from 'react';
import Search from '../../components/Search/Search';
import { Formik } from 'formik';

const SearchContainer = props => {
  const initialValues = {
    search: ''
  };

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      component={Search}
      onSubmit={onSubmit}
    />
  );
};

export default SearchContainer;
