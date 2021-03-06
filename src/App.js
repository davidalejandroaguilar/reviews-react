import React, { Component } from 'react';
import styles from './App.module.css';

import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import NavigationBar from './components/UI/NavigationBar/NavigationBar';
import CompaniesContainer from './containers/Companies/Companies/CompaniesContainer';
import CompanyContainer from './containers/Companies/Company/CompanyContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />

        <Container className={styles.App}>
          <Route path="/" exact component={CompaniesContainer} />
          <Route path="/companies/:id" component={CompanyContainer} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
