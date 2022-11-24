import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Answers from "../../components/Answers.jsx";
import additionData from "../DataFiles/additionData";
import "./Quizzes.css";

let data = additionData;

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    var random = Math.floor(Math.random() * 4);
    this.state = {
      nr: random,
      showButton: false,
      questionAnswered: false,
      score: 0,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  componentWillMount() {
    let { nr } = this.state;
    this.pushData(nr);
  }

  componentWillUnmount() {
    let { nr } = this.state;
    this.pushData(nr);
  }

  pushData(nr) {
    var random = Math.floor(Math.random() * 4);
    if (random === nr) {
      Math.floor(Math.random() * 4);
    }
    this.setState({
      question: data[nr].question,
      answers: [
        data[nr].answers[0],
        data[nr].answers[1],
        data[nr].answers[2],
        data[nr].answers[3],
      ],
      correct: data[nr].correct,
      nr: random,
    });
  }

  nextQuestion() {
    let { nr } = this.state;

    if (this.state.score >= 100) {
      /*add linking here to success page
      const targetDiv = document.getElementById("modal");
        if (targetDiv.style.display === "none") {
          targetDiv.style.display = "";
        }*/
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
    var random = Math.floor(Math.random() * 4);
    this.setState({
      nr: random,
    });
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 25,
    });
  }

  render() {
    let { question, answers, correct, showButton, questionAnswered, score } =
      this.state;

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
                increaseScore={this.handleIncreaseScore}
              ></Answers>
            </div>
            <div id="submit">
              {showButton ? (
                <Button className="fancy-btn" onClick={this.nextQuestion}>
                  {score === 100 ? "Finish quiz" : "Next question"}
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
