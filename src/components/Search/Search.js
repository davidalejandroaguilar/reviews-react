import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styles from './Search.module.css';
import { Form as FormikForm, Field } from 'formik';
import isEmpty from 'lodash/isEmpty';

const Search = props => (
  <div>
    <Form inline tag={FormikForm}>
      <div className={styles.SearchContainer}>
        <FormGroup className={`mb-2 mr-sm-2 mb-sm-0 ${styles.SearchFormGroup}`}>
          <Label for="search" />
          <Input
            tag={Field}
            autoComplete="off"
            name="search"
            id="search"
            placeholder="Search a company..."
            className={styles.SearchInput}
          />
        </FormGroup>

        <Button
          type="submit"
          color="primary"
          disabled={
            props.isSubmitting || !isEmpty(props.errors) || !props.dirty
          }>
          Search
        </Button>
      </div>
    </Form>
  </div>
);

export default Search;
