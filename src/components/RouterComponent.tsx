import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchComponent from './SearchComponent';

const AppRouter: React.FC = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={SearchComponent} />
      </Switch>
    </Router>
  )
}

export default AppRouter;
