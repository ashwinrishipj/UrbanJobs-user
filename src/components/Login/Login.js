import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { validateEmailID, validatePassword } from "../../helpers/validateForm/ValidateForm";
import './Login.css';
import currentPage from "../../redux/actions";
import Card from "react-bootstrap/Card";

function Login() {
  let userId = useRef("");
  let userPassword = useRef("");
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const dispatch = useDispatch();

  function validateSignIn(e) {
    e.preventDefault();

    if (!buttonDisabled) {
      alert("validating user");
      dispatch(currentPage('dashboard'));
    } else {
      alert("please check your username and password")
    }
  };

  function setUser() {
    (validateEmailID(userId.current.value) && validatePassword(userPassword.current.value)) ? setbuttonDisabled(false)
      : setbuttonDisabled(true);
  }

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row update bg-dark">
          <Card className="col-lg-4 mx-auto my-auto">
            <Card.Body>
              <h4 className="text-center">Login</h4>
              <div className="mb-3 mt-4">
                <label className="form-label shadow-none">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control shadow-none"
                  ref={userId}
                  placeholder="john@web.com"
                  onChange={setUser}
                />
              </div>
              <div className="mb-3">
                <label className="form-label ">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control shadow-none"
                  ref={userPassword}
                  placeholder="*************"
                  onChange={setUser}
                />
              </div>

              <div>
                <a href=";" className="mt-3">
                  Forgot password?
                </a>
              </div>

              <button type="button" disabled={buttonDisabled} className="mt-3 btn btn-primary shadow-none btn-transform col-5" onClick={validateSignIn}>
                Login
              </button>

              <div className="mt-3">
                <button className="btn btn-outline shadow-none btn-underline" onClick={() => dispatch(currentPage('register'))}>Registere here </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
