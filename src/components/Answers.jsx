import React from "react";
import Card from "react-bootstrap/Card";

class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswered: false,
    };

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(e) {
    let { isAnswered } = this.props;

    if (!isAnswered) {
      let elem = e.currentTarget;
      let { correct, increaseScore, handleIncorrect } = this.props;
      let answer = Number(elem.dataset.id);
      if (answer === correct) {
        increaseScore();
      } else {
        handleIncorrect();
      }
      this.props.showButton();
    }
  }

  render() {
    let { answers } = this.props;

    return (
      <div id="answers">
        <div className="container-thing">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <Card
                className="btn btn-outline-dark card"
                style={{ cursor: "pointer" }}
                onClick={this.checkAnswer}
                data-id="1"
              >
                <Card.Body className="card-body">
                  <Card.Title>{answers[0]}</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                className="btn btn-outline-dark card"
                style={{ cursor: "pointer" }}
                onClick={this.checkAnswer}
                data-id="2"
              >
                <Card.Body className="card-body">
                  <Card.Title>{answers[1]}</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                className="btn btn-outline-dark card"
                style={{ cursor: "pointer" }}
                onClick={this.checkAnswer}
                data-id="3"
              >
                <Card.Body className="card-body">
                  <Card.Title>{answers[2]}</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card
                className="btn btn-outline-dark card"
                style={{ cursor: "pointer" }}
                onClick={this.checkAnswer}
                data-id="4"
              >
                <Card.Body className="card-body">
                  <Card.Title>{answers[3]}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Answers;
