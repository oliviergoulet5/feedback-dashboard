import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

// Have routes like https://website.com/dashboard/YouTube where YouTube is passed into <Login client="YouTube" /> and the component will handle the rendering.

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path='/' render={ () => (
          <Home />
        )}/>

        <Route path='/dashboard' render={ () => (
          <Login />
        )}/>

      </Switch>

    </div>
  );
}

export default App;
