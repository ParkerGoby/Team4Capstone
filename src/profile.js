import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";


window.onload = () => {
  trophyShow();
}

const trophyShow = () =>{
  if (sessionStorage.getItem("addition1") === "false"){
    document.getElementById("trophy1").style.display = "none"; // to hide
  }
  else{
    document.getElementById("trophy1").style.display = "block"; // to show
}
  if (sessionStorage.getItem("addition2") === "false"){
    document.getElementById("trophy2").style.display = "none"; // to hide
  }
  else{
    document.getElementById("trophy2").style.display = "block"; // to show
}

  if (sessionStorage.getItem("addition3") === "false"){
    document.getElementById("trophy3").style.display = "none"; // to hide
  }
  else{
    document.getElementById("trophy3").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("addition4") === "false"){
    document.getElementById("trophy4").style.display = "none"; // to hide
  }
  else{
    document.getElementById("trophy4").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("addition5") === "false"){
    document.getElementById("trophy5").style.display = "none"; // to hide
  }
  else{
    document.getElementById("trophy5").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("addition6") === "false"){
    document.getElementById("trophy6").style.display = "none"; // to hide
  }
  else{
    document.getElementById("trophy6").style.display = "block"; // to show
  }

}




export function Profile() {
  
  if (sessionStorage.getItem("token") === null) {
   return (
   <div className="col-xs-1 text-center">
              <h1>LOGIN</h1>
              
            </div>
   )
}
else{
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
                           <p>Username: {sessionStorage.getItem("uName")} </p>
                          <p>School: {sessionStorage.getItem("schoolName")}</p>
                          <p>School: {sessionStorage.getItem("addition1")}</p>
                        </Card.Body>
                        </Card>
                         <Card bg="dark" text="white" className="card my-4">
                        <Card.Body>
                          {/* <h3 className="text-center">Your Trophies</h3> */}
                            <div  className="row row-cols-1 row-cols-md-4 g-4">
                              <div  style={{display:"none"}} id="trophy1" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div style={{display:"none"}} id="trophy2" className="col">
                                <img  className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="trophy3" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="trophy4" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="trophy5" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="trophy6" className="col">
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
}

export default Profile
