import axios from "axios";
import React, { useState } from "react";
import { json, Navigate, useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Navigate Page's
  const Navigate = useNavigate();

  //API Handling
  function signin() {
    console.log("data", email, password);
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        localStorage.setItem("Token", JSON.stringify(result.data));
        Navigate("/");
      })
      .catch((error) => {
        Navigate("/*");
        console.log(error);
      });
  }

  return (
    <>
      <div className="container p-3">
        <form>
          <h1>Login Form</h1>
          {/* Email input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>
          {/* Password input */}
          <div data-mdb-input-init="" className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>
          {/* 2 column grid layout for inline styling */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* Checkbox */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="form2Example31"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
            <div className="col">
              {/* Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          {/* Submit button */}
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-primary btn-block mb-4"
            onClick={signin}
          >
            Sign in
          </button>
          {/* Register buttons */}
          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button
              type="button"
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-facebook-f" />
            </button>
            <button
              type="button"
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-google" />
            </button>
            <button
              type="button"
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-twitter" />
            </button>
            <button
              type="button"
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-github" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
