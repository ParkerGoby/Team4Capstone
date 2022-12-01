import { useEffect } from "react";
import './App.css';
import jwt_decode from "jwt-decode";
import './login.css';
import {useState} from 'react'

////// https://www.youtube.com/watch?v=roxC8SMs7HU


function Google() {
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
    <>
        <div className="App">

        <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div id="signInDiv"></div>

        {

            Object.keys(user).length != 0 &&

            <button onClick={(e) => handleSignOut(e)}> sign out</button>

        }

   

                {
                    user && 
                    <div>
                        <img src={user.picture}></img>
                        <h3>{user.name}</h3>

                    </div>
                }
            </div>
      </div>
    </div>
  </div>
      
    </>
);
    

}

export default Google;