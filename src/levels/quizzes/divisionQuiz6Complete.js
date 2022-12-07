import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"

var token;
const userQuery = sessionStorage.getItem("token");
var obj;

export async function divisionQuiz6Complete(quizNum) {

    // When a post request is sent to the create url, we'll add a new record to the database.
  
  
     await fetch("https://astro-learn.herokuapp.com/login/divisionQuiz6Complete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userQuery,
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
}