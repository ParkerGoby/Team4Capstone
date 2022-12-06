import * as React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";

const userQuery = sessionStorage.getItem("token");
var userObj = JSON.stringify(userQuery)
console.log(userQuery);
console.log("above is userQuery")
console.log(userObj);
var obj;
async function profileGrab() {

  // When a post request is sent to the create url, we'll add a new record to the database.


  await fetch("http://localhost:5000/login/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: userQuery
  })
  .then(res => res.json())
  .then(data => {
    obj = data;
  })
  .then(() => {
    console.log(obj);
   })
  .catch(error => {
    window.alert(error);
    return;
  });
console.log("this is return");
console.log(obj);
sessionStorage.setItem('progress',JSON.stringify(obj))
}



export function Profile() {

  return (
    <>
      <div className="title-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-1 text-center">
              <h1>Welcome Back....</h1>
              <p>Select one of the subjects below to start learning!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-thing">
        <div className="row row-cols-1 row-cols-md-1 g-4">
          <div className="col ">
            <Card bg="dark" text="white" className="card my-4">
              <Card.Body>
                <h3 className="text-center">User Information</h3>
                <p>Username: </p>
                <p>School: </p>
              </Card.Body>
              </Card>
               <Card bg="dark" text="white" className="card my-4">
              <Card.Body>
                <h3 className="text-center">Your Trophies</h3>
                  <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                    </div>
                    <div className="col">
                      <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                    </div>
                    <div className="col">
                      <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                    </div>
                    <div className="col">
                      <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                    </div>
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={profileGrab()} type="submit">Sign
                  in</button>
                  </div>
              </Card.Body>
              </Card>
              {/* <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/ProfileTypes/ProfileMath"
                onClick={clickHandler(0)}
                state={{ from: ProfileType }}
              >
                <div className="d-grid gap-2">
                  <Button>Let's Learn!</Button>
                </div>
              </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile
