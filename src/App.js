import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
