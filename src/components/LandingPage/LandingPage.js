import React from "react";

import Card from "react-bootstrap/Card";
import Login from "../Login/Login";
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="container-fluid">
    <div className="row update bg-dark">
      <Card className="col-lg-4 mx-auto my-auto">
        <Card.Body>
            <Login />
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default LandingPage;
