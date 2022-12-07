import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"

var token;
const userQuery = sessionStorage.getItem("token");
var obj;

export async function quizComplete(quizNum) {

    // When a post request is sent to the create url, we'll add a new record to the database.
  
  
     await fetch("http://localhost:5000/login/quizComplete", {
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
}