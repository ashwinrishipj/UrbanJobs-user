import React from "react";
import Card from "react-bootstrap/Card";

import Login from "../Login/Login";
import './LandingPage.css';
import { useSelector } from "react-redux";
import Register from "../Register/Register";
import Dashboard from "../DashBoard/Dashboard";

function LandingPage() {

  const route = useSelector(state => state.currentPage);
  console.log("route in the redux state", route);

  function LoadComponents() {
    switch (route) {
      case 'login':
        return <Login />;

      case 'register':
        return <Register />;

      case 'dashboard':
        return <Dashboard />;

      case 'logout':
        return <Login />

      default:
        return <Login />
    }
  }


  return (
    <React.Fragment>
      <Dashboard />
    </React.Fragment>
  );
}

export default LandingPage;
