import React from 'react';
import styles from './CompanyCard.module.css';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const CompanyCard = props => (
  <Card className={styles.CompanyCard}>
    <CardImg
      className={styles.CompanyCardImage}
      src="https://loremflickr.com/300/300/restaurant"
      alt={props.company.name}
    />

    <CardBody className={styles.CompanyCardBody}>
      <div className={styles.CompanyCardBodyHeader}>
        <div>
          <CardTitle className={styles.CompanyCardTitle}>
            <div>
              <Link
                to={'/companies/' + props.company.id}
                className={styles.CompanyCardTitleLink}>
                {props.company.name}
              </Link>
            </div>
            <div>
              {' '}
              <h6 className={styles.CompanyCardAverage}>
                {props.company.average} / 5.0
              </h6>
            </div>
          </CardTitle>
          <CardText>{props.company.description}</CardText>
        </div>
      </div>
      <div className={styles.CompanyCardActions}>
        <Button
          color="primary"
          onClick={() => props.history.push('/companies/' + props.company.id)}>
          Review
        </Button>
      </div>
    </CardBody>
  </Card>
);

export default withRouter(CompanyCard);
