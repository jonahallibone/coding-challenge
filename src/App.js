import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";
import BalanceSheetPage from './components/BalanceSheetPage/BalanceSheetPage';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route path="/symbol/:symbol" component={BalanceSheetPage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
