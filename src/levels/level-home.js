import React, { useState } from "react";
import "./level-home.css";
import ProgressBar from "react-bootstrap/ProgressBar";

var score = 0;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => e.preventDefault();
  console.log(userName, password);

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
      console.log("hi");
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
        <div class="progress_bar">
          <ProgressBar id="1" animated now={score} />
        </div>
        <div class="title-container">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-1 text-center">
                <h1>{currentQuestion}</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="container-thing">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="btn btn-outline-dark card">
                <div class="card-body">
                  <h5 class="card-title text-center align-middle">123</h5>
                  {/*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>*/}
                  {/* <p>Addition</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="btn btn-outline-dark card">
                <div class="card-body">
                  <h5 class="card-title text-center align-middle">345</h5>
                  {/*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                  {/* <p>Addition</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="btn btn-outline-dark card">
                <div class="card-body">
                  <h5 class="card-title text-center align-middle">3</h5>
                  {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                  {/* <p>Addition</p> */}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="btn btn-outline-dark card">
                <div class="card-body" onClick={() => newQuestion()}>
                  <h5 class="card-title text-center align-middle">
                    {currentAnswer}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <div>
        <footer className="level_footer">
          <div class="continue_button">
            <button class="btn btn-primary" /*onClick={() => NewQuestion()}*/>
              Continue
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Login;
