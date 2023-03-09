import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { validateEmailID, validatePassword } from "../../helpers/validateForm/ValidateForm";
import './Login.css';
import currentPage from "../../redux/actions";
import Card from "react-bootstrap/Card";
import validateLogin from "../../helpers/fetchData";

function Login() {
  let userId = useRef("");
  let userPassword = useRef("");
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [emailError, setemailError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const dispatch = useDispatch();

  async function validateSignIn(e) {
    e.preventDefault();
    let data = { 'email': `${userId.current.value}`, 'password': `${userPassword.current.value}` };

    if (!buttonDisabled) {
      let loginResponse = await validateLogin(data);
      console.log("response", loginResponse);

      if (loginResponse === true) {
        dispatch(currentPage('dashboard'));
      } else {
        if (loginResponse.includes('email')) {
          setemailError(true);
        } else if (loginResponse.includes('password')) {
          setpasswordError(true);
        } else {
          alert("error in server. we are fixing on it. Please try again later...");
        }
      }

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
          <Card className="col-lg-4 mx-auto my-auto bg-light">
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
              {emailError && <p className="text-danger">Email incorrect!. Please Enter a valid Email.</p>}
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

              {passwordError && <p className="text-danger">password is incorrect. Please enter a valid password.</p>}
              <button type="button" disabled={buttonDisabled} className="mt-3 btn btn-primary shadow-none btn-transform col-4 text-center" onClick={validateSignIn}>
                Submit
              </button>

              <div className="mt-3">
                <label>Don't have an account?</label> <button className="btn btn-outline shadow-none btn-underline" onClick={() => dispatch(currentPage('register'))}>Register here!</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
