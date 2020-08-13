import React, { useState, createContext } from 'react';
import Welcome from './Components/Welcome/Welcome';
import Feed from './Components/Feed/Feed';
import './App.scss';
import { Switch, Route, withRouter } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount/CreateAccount';

export const DataContext = createContext();

function App() {
const [activeUser, setActiveUser] = useState();

  return (
    <div className="App">
      <Switch>
        <DataContext.Provider value={{ activeUser, setActiveUser }}>
        <Route exact path ='/' component={Welcome} />
        <Route exact path='/feed' component={Feed} />
        <Route exact path='/create-account' component={CreateAccount} />
        </DataContext.Provider>
      </Switch>
    </div>
  );
}

export default withRouter(App);
