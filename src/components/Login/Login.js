import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { validateEmailID, validatePassword } from "../../helpers/validateForm/ValidateForm";
import './Login.css';
import currentPage from "../../redux/reducers/currentPage";

function Login() {
  let userId = useRef("");
  let userPassword = useRef("");
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const dispatch = useDispatch();

  function validateSignIn(e) {
    e.preventDefault();

    if (!buttonDisabled) {
      alert("validating user");
    } else {
      alert("please check your username and password")
    }
  };

  function setUser() {
    (validateEmailID(userId.current.value) && validatePassword(userPassword.current.value)) ? setbuttonDisabled(false)
      : setbuttonDisabled(true);
  }

  function triggerRegister() {
  }

  return (
    <div>
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

      <button type="button" disabled={buttonDisabled} className="mt-3 btn btn-info shadow-none btn-transform col-5" onClick={validateSignIn}>
        Login
      </button>

      <div className="mt-3">
        <label >Don't have an account?</label> <button className="btn shadow-none btn-warning" onClick={() => dispatch({ type: 'CURRENTPAGE', payload: 'register' })}>Register here</button>
      </div>
    </div>
  );
}

export default Login;
