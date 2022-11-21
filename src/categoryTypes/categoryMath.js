import * as React from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

var level_home = "../levels/level-home";

export function LevelSelect() {

  function clickHandler(typeSelection) {
    categoryType = typeSelection;
  }

  const location = useLocation();
  const { from } = location.state;
  let categoryType;

  switch (from) {
    case 0:
      categoryType = "Counting";
      level_home = "../levels/level-home";
      break;
    case 1:
      categoryType = "Addition";
      level_home = "../levels/quizzes/additionQuiz";
      break;
    case 2:
      categoryType = "Subtraction";
      level_home = "../levels/quizzes/subtractionQuiz";
      break;
    case 3:
      categoryType = "Multiplication";
      level_home = "../levels/quizzes/multiplicationQuiz";
      break;
    case 4:
      categoryType = "Division";
      level_home = "../levels/quizzes/divisionQuiz";
      break;
    case 5:
      categoryType = "Fractions";
      level_home = "../levels/quizzes/fractionsQuiz";
      break;
    default:
      console.log("error: unknown category type");
      break;
  }

  return (
    <>
      <div className="title-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-1 text-center">
              <h1>{categoryType} Levels</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="cardCont1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Level 1</h5>
                <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
                      <div>
                      <Button>Level 1</Button>
                      </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="cardCont1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Level 4</h5>
                <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
                      <div>
                      <Button>Under construction!</Button>
                      </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="cardCont1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Level 2</h5>
                <Link
                    style={{ color: "white", textDecoration: "none" }}>
                      <div>
                      <Button href="/question1">Level 2</Button>
                      </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="cardCont1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Level 5</h5>
                <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
                      <div>
                      <Button>Under construction!</Button>
                      </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="cardCont1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Level 3</h5>
                <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
                      <div>
                      <Button>Under construction!</Button>
                      </div>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="cardCont1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Level 6</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <Button className="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
                    Under construction!
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LevelSelect;
