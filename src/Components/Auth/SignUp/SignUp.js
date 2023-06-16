import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [error, setError] = useState("");

  const FormSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const enteredConfirmPassword = confirmPassword.current.value;

    if (enteredPassword === enteredConfirmPassword) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB1PJsw9YLFXSIP6px1hBNPSWCISz1hPUI",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          toast.success("User has successfully signed up.");

          // to clear input Fields:
          confirmPassword.current.value = "";
          password.current.value = "";
          email.current.value = "";
        } else {
          const errorData = await response.json();
          console.log(errorData);
          toast.error(errorData.error.message);
        }
      } catch (error) {
        console.log(error);
        setError("An error occurred during sign up.");
      }
    } else {
      setError("Passwords do not match.");
    }
  };

  return (
    <form className="SignUpForm">
      <div className="form">
        <div className="title">Create Your Account</div>
        <div className="Email">
          <label>Email</label>
          <input type="email" ref={email} required />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" ref={password} min={5} max={20} />
        </div>
        <div className="password">
          <label>Confirm Password</label>
          <input type="password" ref={confirmPassword} />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="signUpButton">
          <Button onClick={FormSubmitHandler} variant="primary">
            SignUp
          </Button>
        </div>
        <Link to="/LogIn">
          <div className="info">Have an Account? Log In?</div>
        </Link>
      </div>
      <ToastContainer />
    </form>
  );
};

export default SignUp;
