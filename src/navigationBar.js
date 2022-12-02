import { Link } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import jwt_decode from "jwt-decode";
import './login.css';
import {useState} from 'react'

export function NavigationBar() {
  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      var userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
      document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
      setUser({});
      document.getElementById("signInDiv").hidden = false
  }


  useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
          client_id: "755566697486-amgo7bd3lmn1s3i2bfvepjunhjro8e2v.apps.googleusercontent.com",
          callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          { theme: "outline", size: "large"}
      );

      google.accounts.id.prompt();
  }, []);

  // sign in button

  // sign out button

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
      <div className="container-fluid">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <a className="navbar-brand text-white">
            <img
              src={require("./assets/rocket.png")}
              alt="Astro-Learn Rocket"
              width="50"
              height="50"
            ></img>
            Astro-Learn
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/category"
                >
                  Categories
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/guidebook/guidebook"
                >
                  Guidebooks
                </Link>
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/login"
              >
                <li>Register</li>
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              
   
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/login"
              >
   
        <li>

                Login {user.name}</li>
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavigationBar;
