import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import PortfolioTracker from './components/PortfolioTracker';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/portfolio" component={PortfolioTracker} />
      </Switch>
    </Router>
  );
}

export default App;
