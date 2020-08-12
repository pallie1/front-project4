import React from 'react';
import Welcome from './Components/Welcome/Welcome';
import Feed from './Components/Feed/Feed';
import './App.scss';
import { Switch, Route, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component={Welcome} />
        <Route exact path='/feed' component={Feed} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
