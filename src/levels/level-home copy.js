import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./level-home.css";
import ProgressBar from "react-bootstrap/ProgressBar";

var score = 0;

//if (login == true) check that user is logged in

const Quiz = () => {
  let currentQuestion = getQuestion();
  let currentAnswer = getAnswer();

  var [score, setScore] = React.useState(0);
  //  Function called to grab new question and answer
  const newQuestion = () => {
    setScore((score) => score + 20);
    if (score >= 100) {
      //Done with level
    } else {
      getQuestion();
      getAnswer();
      console.log("Hi");
    }
  };

  //  Question is defined here
  function getQuestion() {
    let question = "Sample Question";
    return question;
  }

  //  Function called to grab answer, can pass the id of the question later and return the answer from the db.
  function getAnswer() {
    let answer = "Sample Answer";
    return answer;
  }

  return (
    <>
      <>
        <div className="progress_bar">
          <ProgressBar id="1" animated now={score} />
        </div>
        <div className="title-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-1 text-center">
                <h1>{currentQuestion}</h1>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-thing">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="btn btn-outline-dark card">
                <div className="card-body">
                  <h5 className="card-title text-center align-middle">123</h5>
                  {/*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>*/}
                  {/* <p>Addition</p> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="btn btn-outline-dark card">
                <div className="card-body">
                  <h5 className="card-title text-center align-middle">345</h5>
                  {/*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                  {/* <p>Addition</p> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="btn btn-outline-dark card">
                <div className="card-body">
                  <h5 className="card-title text-center align-middle">
                    {}
                  </h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                  {/* <p>Addition</p> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="btn btn-outline-dark card">
                <div className="card-body">
                  <h5 className="card-title text-center align-middle">
                    {currentAnswer}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <Button className="btn btn-primary" onClick={() => newQuestion()}>
              Continue
          </Button>
        </div>
      </>

    </>
  );
};

export default Quiz;
