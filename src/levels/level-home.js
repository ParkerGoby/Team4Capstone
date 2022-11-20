import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Answers from "./Answers.jsx";
import data from "./data";
import "./level-home.css";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nr: 0,
      total: data.length,
      showButton: false,
      questionAnswered: false,
      score: 0
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  UNSAFE_componentWillMount() {
    let { nr } = this.state;
    this.pushData(nr);
  }

  pushData(nr) {
    this.setState({
      question: data[nr].question,
      answers: [
        data[nr].answers[0],
        data[nr].answers[1],
        data[nr].answers[2],
        data[nr].answers[3],
      ],
      correct: data[nr].correct,
      nr: this.state.nr + 1,
    });
  }

  nextQuestion() {
    let { nr, total, score } = this.state;

    if (nr === total) {
      this.setState({
        displayPopup: "flex",
      });
    } else {
      this.pushData(nr);
      this.setState({
        showButton: false,
        questionAnswered: false,
      });
    }
  }

  handleShowButton() {
    this.setState({
      showButton: true,
      questionAnswered: true,
    });
  }

  handleStartQuiz() {
    this.setState({
      nr: 1,
    });
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 25,
    });
  }

  render() {
    let {
      nr,
      total,
      question,
      answers,
      correct,
      showButton,
      questionAnswered,
      score,
    } = this.state;

    return (
      <>
      <>
      <div className="progress_bar">
          <ProgressBar id="progress_bar" animated now={score}></ProgressBar>
      </div>
      <Container className="container" fluid>
        <div id="question" className="text-center">
          <h1>{question}</h1>
        </div>
        <div>
          <Answers
            answers={answers}
            correct={correct}
            showButton={this.handleShowButton}
            isAnswered={questionAnswered}
            increaseScore={this.handleIncreaseScore}>
            </Answers>
        </div>
        <div id="submit">
          {showButton ? (
            <Button className="fancy-btn" onClick={this.nextQuestion}>
              {nr === total ? "Finish quiz" : "Next question"}
            </Button>
          ) : null}
        </div>
      </Container>
      </>
      </>
    );
  }
}

export default Quiz;
