import * as React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function Addition() {
  return (
    <>
      <div className="title-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-1 text-center">
              <h1>Addition Levels</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="container-thing">
        <div className="row">
          <div className="col-sm-6">
            <div className="cardCont1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Level 1</h5>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/additionQuiz1"
                  >
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
                    to="/additionQuiz4"
                  >
                    <div>
                      <Button>Level 4</Button>
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
                    style={{ color: "white", textDecoration: "none" }}
                    to="/additionQuiz2"
                  >
                    <div>
                      <Button>Level 2</Button>
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
                  {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/additionQuiz5"
                  >
                    <div>
                      <Button>Level 5</Button>
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
                  {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/additionQuiz3"
                  >
                    <div>
                      <Button>Level 3</Button>
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
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/additionQuiz6"
                  >
                    <div>
                      <Button>Level 6</Button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addition;
