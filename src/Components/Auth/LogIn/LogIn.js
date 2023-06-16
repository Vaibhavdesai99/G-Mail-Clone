import React from "react";
import "./LogIn.css";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const LogIn = () => {
  const email = useRef();
  const password = useRef();

  //Form Submit Handler :

  return (
    <form className="LogInForm">
      <div className="form">
        <div className="title">LogIn</div>
        <div className="Email">
          <label>Email</label>
          <input type="email" ref={email} />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" ref={password} />
        </div>

        <div className="signUpButton">
          <Button varient="primary">LogIn</Button>
        </div>
        <Link to="/SignUp">
          <div className="info">Create New Account ?</div>
        </Link>
      </div>
    </form>
  );
};

export default LogIn;
