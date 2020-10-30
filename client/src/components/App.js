import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, ReviewList, CreateReview, Page404 } from './index';
class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-container">
          <Navbar />
          <Switch>
            <Route path="/create_review" component={CreateReview} />
            <Route exact path="/" component={ReviewList} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
