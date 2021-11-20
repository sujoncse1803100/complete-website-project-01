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
import NotFound from './components/NotFound/NotFound';
import AllPatients from './components/AllPatients/AllPatients';
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

          <Route exact path="/doctor/appoinments">
            <Dashboard />
          </Route>

          <Route exact path="/doctor/patients">
            <AllPatients />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
