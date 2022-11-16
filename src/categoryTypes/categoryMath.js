import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { default as Level_home } from "../levels/level-home";

export function LevelSelect() {
  const location = useLocation();
  const { from } = location.state;
  let categoryType;

  switch (from) {
    case 0:
      categoryType = "Counting";
      break;
    case 1:
      categoryType = "Multiplication";
      break;
    case 2:
      categoryType = "Addition";
      break;
    case 3:
      categoryType = "Division";
      break;
    case 4:
      categoryType = "Subtraction";
      break;
    case 5:
      categoryType = "Fractions";
      break;
    default:
      console.log("error: unknown category type");
      break;
  }

  return (
    <>
      <div class="title-container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-1 text-center">
              <h1>{categoryType} Levels</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="cardCont1">
            <div class="card">
              <div class="card-body">
                {/* <a class="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none' }} to="/counting">Counting</Link></a> */}
                <h5 class="card-title">Level 1</h5>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a class="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={Level_home}
                  >
                    Level 1
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="cardCont1">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Level 4</h5>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a class="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={Level_home}
                  >
                    Under construction!
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="cardCont1">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Level 2</h5>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a class="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={Level_home}
                  >
                    Under construction!
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="cardCont1">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Level 5</h5>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a class="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={Level_home}
                  >
                    Under construction!
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="cardCont1">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Level 3</h5>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a class="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={Level_home}
                  >
                    Under construction!
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="cardCont1">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Level 6</h5>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a class="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={Level_home}
                  >
                    Under construction!
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LevelSelect;
