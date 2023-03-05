import React from "react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { validateEmailID,validatePassword } from "../../helpers/validateForm/ValidateForm";
import currentPage from "../../redux/actions";

function Register() {
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

    return (
        <div>
            <h4 className="text-center">Register</h4>
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

            <button type="button" disabled={buttonDisabled} className="mt-3 btn btn-info shadow-none btn-transform col-3" onClick={validateSignIn}>
                Register
            </button>

            <div className="mt-3">
                <label >Already Signed up?</label> <a href="#" onClick={() => dispatch(currentPage('login'))}>Sign In here</a>
            </div>
        </div>
    );
}

export default Register;