import React from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { Field, Form as FormikForm, ErrorMessage } from 'formik';
import styles from './NewReview.module.css';
import isEmpty from 'lodash/isEmpty';

class NewReview extends React.Component {
  state = {
    modalShown: this.props.isSubmitting
  };

  showModal = event => {
    this.setState({ modalShown: true });
  };

  hideModal = event => {
    this.setState({ modalShown: false });
  };

  onSubmit = event => {
    this.setState({ modalShown: false });
    this.props.handleSubmit(event); // Coming from Formik
  };

  render() {
    return (
      <aside>
        {/*Modal trigger*/}
        <div className={styles.NewReviewTrigger}>
          <Button type="button" color="primary" onClick={this.showModal}>
            Review
          </Button>
        </div>

        <div
          className={
            styles.NewReviewContainer +
            ' ' +
            (this.state.modalShown ? styles.Display : styles.Hide)
          }>
          {/*Modal closer row*/}
          <Row>
            <Col
              sm="12"
              className={styles.NewReviewModalCloser}
              onClick={this.hideModal}>
              &times;
            </Col>
          </Row>

          {/*Actual form row*/}
          <Row>
            <Col sm="12">
              <h5>Leave a review:</h5>

              <Form tag={FormikForm} onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="rating">Your rating</Label>
                  <Input
                    tag={Field}
                    component="select"
                    name="rating"
                    id="rating">
                    <option>Select a rating</option>
                    <option value="5" defaultValue>
                      5
                    </option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </Input>

                  <ErrorMessage
                    name="rating"
                    className="text-danger"
                    component="div"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="title">Title your review</Label>
                  <Input
                    tag={Field}
                    component="input"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title your review"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-danger"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="description">Review this company</Label>
                  <Input
                    tag={Field}
                    component="textarea"
                    name="description"
                    id="description"
                    placeholder="Your review"
                  />
                  <small className="text-muted">
                    Minimum {this.props.minimumReviewLength || 30} chars.
                  </small>

                  <ErrorMessage
                    name="description"
                    className="text-danger"
                    component="div"
                  />
                </FormGroup>

                <Input
                  tag={Field}
                  component="input"
                  type="hidden"
                  name="companyId"
                />

                <Button
                  color="success"
                  type="submit"
                  disabled={
                    this.props.isSubmitting ||
                    !isEmpty(this.props.errors) ||
                    !this.props.dirty
                  }>
                  Review
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </aside>
    );
  }
}

export default NewReview;
