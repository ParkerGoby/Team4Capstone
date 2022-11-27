import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
// eslint-disable-next-line
import { BrowserRouter as Route, Link } from "react-router-dom";
import Answers from "../../../components/Answers.jsx";
import multiplicationData3 from "../../DataFiles/multiplicationData/multiplicationData3";
import "../Quizzes.css";

let data = multiplicationData3;

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    var random = Math.floor(Math.random() * 500);
    this.state = {
      nr: random,
      showButton: false,
      questionAnswered: false,
      score: 0,
      showModal: false,
      showSuccessAlert: false,
      showIncorrectAlert: false,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
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
    var random = Math.floor(Math.random() * 500);
    if (random === nr) {
      Math.floor(Math.random() * 500);
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
      this.setState({ showModal: true });
    } else {
      this.pushData(nr);
      this.setState({
        showButton: false,
        questionAnswered: false,
        showSuccessAlert: false,
        showIncorrectAlert: false,
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
    var random = Math.floor(Math.random() * 500);
    this.setState({
      nr: random,
    });
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 10,
      showSuccessAlert: true,
    });
  }

  handleIncorrect() {
    this.setState({
      showIncorrectAlert: true,
    });
  }

  render() {
    let { question, answers, correct, showButton, questionAnswered, score } =
      this.state;

    return (
      <>
        <>
          <>
            <>
              <Modal
                show={this.state.showModal}
                onHide={() => this.setState({ showModal: false })}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Congratulations! You finished the quiz!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Click the button below to collect your badge!
                </Modal.Body>
                <Modal.Footer>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/category"
                  >
                    <div className="d-grid gap-2">
                      <Button
                        variant="primary"
                        onClick={() => this.setState({ showModal: false })}
                      >
                        Collect Badge
                      </Button>
                    </div>
                  </Link>
                </Modal.Footer>
              </Modal>
              <div className="progress_bar">
                <ProgressBar
                  id="progress_bar"
                  animated
                  now={score}
                ></ProgressBar>
              </div>
              <Container className="container" fluid>
                <div id="popup" className="alert">
                  <Alert
                    variant="success"
                    onClose={() => this.setState({ showSuccessAlert: false })}
                    show={this.state.showSuccessAlert}
                    delay={3000}
                    autohide
                  >
                    <Alert.Heading>You got it right! Great work!</Alert.Heading>
                  </Alert>
                </div>

                <div id="popup" className="alert">
                  <Alert
                    variant="danger"
                    onClose={() => this.setState({ showIncorrectAlert: false })}
                    show={this.state.showIncorrectAlert}
                    delay={3000}
                    autohide
                  >
                    <Alert.Heading>Whoops, you got it wrong. Try again!</Alert.Heading>
                  </Alert>
                </div>

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
                    handleIncorrect={this.handleIncorrect}
                  ></Answers>
                </div>
                <div id="submit">
                  {showButton ? (
                    <Button className="continue_button" onClick={this.nextQuestion}>
                      {score === 100 ? "Finish quiz" : "Next question"}
                    </Button>
                  ) : null}
                </div>
              </Container>
              <Container>
                <div>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/category"
                  >
                    <div>
                      <Button variant="primary">Return to categories</Button>
                    </div>
                  </Link>
                </div>
              </Container>
            </>
          </>
        </>
      </>
    );
  }
}

export default Quiz;
