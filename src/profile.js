import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";


window.onload = () => {
  trophyShow();
}

const trophyShow = () =>{
  if (sessionStorage.getItem("addition1") === "false"){
    document.getElementById("additionTrophy1").style.display = "none"; // to hide
  }
  else{
    document.getElementById("additionTrophy1").style.display = "block"; // to show
}
  if (sessionStorage.getItem("addition2") === "false"){
    document.getElementById("additionTrophy2").style.display = "none"; // to hide
  }
  else{
    document.getElementById("additionTrophy2").style.display = "block"; // to show
}

  if (sessionStorage.getItem("addition3") === "false"){
    document.getElementById("additionTrophy3").style.display = "none"; // to hide
  }
  else{
    document.getElementById("additionTrophy3").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("addition4") === "false"){
    document.getElementById("additionTrophy4").style.display = "none"; // to hide
  }
  else{
    document.getElementById("additionTrophy4").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("addition5") === "false"){
    document.getElementById("additionTrophy5").style.display = "none"; // to hide
  }
  else{
    document.getElementById("additionTrophy5").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("addition6") === "false"){
    document.getElementById("additionTrophy6").style.display = "none"; // to hide
  }
  else{
    document.getElementById("additionTrophy6").style.display = "block"; // to show
  }
  
   if (sessionStorage.getItem("subtraction1") === "false"){
    document.getElementById("subtractionTrophy1").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy1").style.display = "block"; // to show
}
  if (sessionStorage.getItem("subtraction2") === "false"){
    document.getElementById("subtractionTrophy2").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy2").style.display = "block"; // to show
}

  if (sessionStorage.getItem("subtraction3") === "false"){
    document.getElementById("subtractionTrophy3").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy3").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("subtraction4") === "false"){
    document.getElementById("subtractionTrophy4").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy4").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("subtraction5") === "false"){
    document.getElementById("subtractionTrophy5").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy5").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("subtraction6") === "false"){
    document.getElementById("subtractionTrophy6").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy6").style.display = "block"; // to show
  }

   if (sessionStorage.getItem("multiplication1") === "false"){
    document.getElementById("multiplicationTrophy1").style.display = "none"; // to hide
  }
  else{
    document.getElementById("multiplicationTrophy1").style.display = "block"; // to show
}
  if (sessionStorage.getItem("multiplication2") === "false"){
    document.getElementById("multiplicationTrophy2").style.display = "none"; // to hide
  }
  else{
    document.getElementById("multiplicationTrophy2").style.display = "block"; // to show
}

  if (sessionStorage.getItem("multiplication3") === "false"){
    document.getElementById("multiplicationTrophy3").style.display = "none"; // to hide
  }
  else{
    document.getElementById("multiplicationTrophy3").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("multiplication4") === "false"){
    document.getElementById("multiplicationTrophy4").style.display = "none"; // to hide
  }
  else{
    document.getElementById("multiplicationTrophy4").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("multiplication5") === "false"){
    document.getElementById("multiplicationTrophy5").style.display = "none"; // to hide
  }
  else{
    document.getElementById("multiplicationTrophy5").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("multiplication6") === "false"){
    document.getElementById("multiplicationTrophy6").style.display = "none"; // to hide
  }
  else{
    document.getElementById("multiplicationTrophy6").style.display = "block"; // to show
  }

   if (sessionStorage.getItem("subtraction1") === "false"){
    document.getElementById("subtractionTrophy1").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy1").style.display = "block"; // to show
}
  if (sessionStorage.getItem("subtraction2") === "false"){
    document.getElementById("subtractionTrophy2").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy2").style.display = "block"; // to show
}

  if (sessionStorage.getItem("subtraction3") === "false"){
    document.getElementById("subtractionTrophy3").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy3").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("subtraction4") === "false"){
    document.getElementById("subtractionTrophy4").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy4").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("subtraction5") === "false"){
    document.getElementById("subtractionTrophy5").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy5").style.display = "block"; // to show
  }

  if (sessionStorage.getItem("subtraction6") === "false"){
    document.getElementById("subtractionTrophy6").style.display = "none"; // to hide
  }
  else{
    document.getElementById("subtractionTrophy6").style.display = "block"; // to show
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
                          <h3 className="text-center">Your Trophies</h3>
                            <div  className="row row-cols-1 row-cols-md-4 g-4">
                              <div  style={{display:"none"}} id="additiontrophy1" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div style={{display:"none"}} id="additiontrophy2" className="col">
                                <img  className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="additiontrophy3" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="additiontrophy4" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="additiontrophy5" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="additiontrophy6" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="subtractionTrophy1" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div style={{display:"none"}} id="subtractionTrophy2" className="col">
                                <img  className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="subtractionTrophy3" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="subtractionTrophy4" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="subtractionTrophy5" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="subtractionTrophy6" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="multiplicationTrophy1" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div style={{display:"none"}} id="multiplicationTrophy2" className="col">
                                <img  className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="multiplicationTrophy3" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="multiplicationTrophy4" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="multiplicationTrophy5" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="multiplicationTrophy6" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="divisionTrophy1" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div style={{display:"none"}} id="divisionTrophy2" className="col">
                                <img  className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="divisionTrophy3" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="divisionTrophy4" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="divisionTrophy5" className="col">
                                <img className="cardImg" variant="top" src={require("./assets/testtrophy.png")} />
                              </div>
                              <div  style={{display:"none"}} id="divisionTrophy6" className="col">
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
