import * as React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";


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
