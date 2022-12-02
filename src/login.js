// import { useState } from "react"
import './login.css';
import { useEffect } from "react";
import './App.css';
import jwt_decode from "jwt-decode";
import './login.css';
import { useState } from 'react'


function Login() {
  const [user, setUser] = useState({});

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
      { theme: "outline", size: "large", },
     
    );

    google.accounts.id.prompt();
  }, []);


  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In with Google</h5>
                <div>
                <div id="signInDiv" className="justify-content-center" data-logo_alignment="center"></div>
                {
                    user && 
                                    <div className='justify-content-center'>
                        <img src={user.picture}></img>
                        <h3>{user.name}</h3>

                    </div>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login