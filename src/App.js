import React, { Component } from 'react';
import styles from './App.module.css';

import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import NavigationBar from './components/UI/NavigationBar/NavigationBar';
import CompanyListContainer from './containers/Companies/CompanyList/CompanyListContainer';
import CompanyContainer from './containers/Companies/Company/CompanyContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />

        <Container className={styles.App}>
          <Route path="/" exact component={CompanyListContainer} />
          <Route path="/companies/:id" component={CompanyContainer} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
