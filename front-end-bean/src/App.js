import React, { useState, createContext } from 'react';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Login from './Components/Login/Login';
import Welcome from './Components/Welcome/Welcome';
import PostReview from './Components/PostReview/PostReview';
import CreateCafe from './Components/CreateCafe/CreateCafe';
import MapDis from './Components/MapDis/MapDis';
import SingleCafeRevs from './Components/SingleCafeRevs/SingleCafeRevs';
import Feed from './Components/Feed/Feed';
import Profile from './Components/Profile/Profile';
import EditProfile from './Components/EditProfile/EditProfile';
import DeleteProfile from './Components/DeleteProfile/DeleteProfile';
import ProfileOthers from './Components/ProfileOthers/ProfileOthers';
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
        <Route exact path='/map' component={MapDis} />
        <Route exact path='/create-account' component={CreateAccount} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/post-review' component={PostReview} />
        <Route exact path='/create-cafe' component={CreateCafe} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/edit-profile' component={EditProfile} />
        <Route exact path='/delete-profile' component={DeleteProfile} />
        <Route exact path='/profile/:id' component={ProfileOthers} />
        <Route exact path='/reviews/:id' component={SingleCafeRevs} />
        </DataContext.Provider>
      </Switch>
    </div>
  );
}

export default withRouter(App);
