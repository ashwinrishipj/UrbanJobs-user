import React from "react";
import Card from "react-bootstrap/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import './LandingPage.css';
import { useSelector } from "react-redux";
import Register from "../Register/Register";

function LandingPage() {

  const route = useSelector(state => state.currentPage);

  alert(route)
  return (
    <div className="container-fluid">
      <div className="row update bg-dark">
        <Card className="col-lg-4 mx-auto my-auto">
          <Card.Body>
            <BrowserRouter>
              <Routes>
                {(route === "login" && (
                  <Route path="/" component={() => (
                    <Login />
                  )} />
                )) || (route === "register" && (
                  <Route
                    path="/"
                    component={() => (
                      <Register />
                    )}
                  />
                ))}
              </Routes>
            </BrowserRouter>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default LandingPage;
