import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Favourites from '../Favourites';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/favourites'>
          <Favourites />
        </Route>
        <Route path='/'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
