import React from "react";
import "./Navbar.css";
import gmail from "../Images/gmail-7250524-7250524@0.png";
import gmailtwo from "../Images/google.png";
import GmailIcon from "../Images/Daco_106653.png";
import Inbox from "../Images/Gmail_2.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="subDiv">
        <div className="leftNavBar">
          <img src={GmailIcon} style={{ width: "10%" }} alt="img" />
        </div>
        <div className="rightNavbar">
          <div>For WORK</div>
          <Link to="/LogIn">
            <div>
              <Button>Sign In</Button>
            </div>
          </Link>

          <Link to="/SignUp">
            <div>
              <Button varient="primary">Create Account</Button>
            </div>
          </Link>
        </div>
      </nav>
      <section className="leftSideSection">
        <div className="leftsideInfoOne">
          <div>Secure, smart</div>
          <div>and easy to use</div>
          <div>email</div>
        </div>
        <div className="leftSideInfoTwo">
          <div>Get more done with Gmail. Now integrated with</div>
          <div>Google Chat, Google Meet, and more, all in one place.</div>
        </div>
        <div className="leftSideInfoThree">
          <Link to="/SignUp">
            <div>
              <Button varient="primary">Create Account</Button>
            </div>
          </Link>
          <div>For WORK</div>
        </div>
      </section>
      <section className="rightSideSection">
        <div className="rightsideIndoOne">
          <div>
            <img src={Inbox} alt="img" style={{ width: "92%" }} />
          </div>
          <div>
            <img src={gmail} alt="img" style={{ width: "22%" }} />
          </div>
          <div style={{ marginTop: "-6rem" }}>
            <img
              src={gmailtwo}
              alt="img"
              style={{ width: "16%", marginLeft: "20rem" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
