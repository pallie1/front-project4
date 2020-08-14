import React, { useState, createContext } from 'react';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Login from './Components/Login/Login';
import Welcome from './Components/Welcome/Welcome';
import PostReview from './Components/PostReview/PostReview';
import CreateCafe from './Components/CreateCafe/CreateCafe';
import Feed from './Components/Feed/Feed';
import './App.scss';
import { Switch, Route, withRouter } from 'react-router-dom';



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
        <Route exact path='/login' component={Login} />
        <Route exact path='/post-review' component={PostReview} />
        <Route exact path='/create-cafe' component={CreateCafe} />
        </DataContext.Provider>
      </Switch>
    </div>
  );
}

export default withRouter(App);
