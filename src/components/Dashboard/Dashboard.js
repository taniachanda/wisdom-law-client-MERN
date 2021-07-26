import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidenav from "./../Shared/Sidebar/Sidenav";
import Home from "./../Home/Home/Home";
import AddService from "./../Admin/AddService/AddService";
import AppointmentList from "./../Clients/AppointmentList/AppointmentList";
import AddReview from "./../Clients/AddReview/AddReview";
import AdminOrderList from "./../Admin/AdminOrderList/AdminOrderList";
import MakeAdmin from "./../Admin/MakeAdmin/MakeAdmin";
import ManageSeviceList from "../Admin/ManageServiceList/ManageSeviceList";

const Dashboard = () => {
  return (
    <Router>
      <Sidenav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/appointmentList" component={AppointmentList} />
        <Route path="/addReview" component={AddReview} />
        <Route path="/addService" component={AddService} />
        <Route path="/orderList" component={AdminOrderList} />
        <Route path="/makeAdmin" component={MakeAdmin} />
        <Route path="/manageService" component={ManageSeviceList} />
      </Switch>
    </Router>
  );
};

export default Dashboard;
