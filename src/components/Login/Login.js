import React, { useRef, useState } from "react";
import { validateEmailID, validatePassword } from "../../helpers/validateForm/ValidateForm";

function Login() {
  let userId = useRef("");
  let userPassword = useRef("");
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  function validateSignIn(e) {
    e.preventDefault();

    if (!buttonDisabled) {
      alert("validating user");
    } else {
      alert("please check your username and password")
    }
  };

  function setUser() {
    if ((validateEmailID(userId.current.value) && validatePassword(userPassword.current.value))) setbuttonDisabled(false)
    else setbuttonDisabled(true);
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
      <div className="mb-3">
        Forgot Password?
      </div>
      <button type="button" disabled={buttonDisabled} className="btn btn-primary" onClick={validateSignIn}>
        Submit
      </button>
    </div>
  );
}

export default Login;
