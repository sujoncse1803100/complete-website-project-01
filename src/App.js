import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appoinment from './components/Appoinment/Appoinment/Appoinment';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
export const UserContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({});

  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/appoinment">
            <Appoinment />
          </Route>

          <Route exact path="/dashboard/appoinment">
            <Dashboard />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
