import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import LogIn from "./components/LogIn/LogIn";
import Appointment from "./components/Clients/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LogIn} />
          <PrivateRoute path="/appointment/:_id">
            <Appointment />
          </PrivateRoute>
          <Route component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
