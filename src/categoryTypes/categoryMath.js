import * as React from "react";
import { Link, useLocation } from "react-router-dom";
//import { default as Level_home } from "../levels/level-home";

const level_home = "../levels/level-home";

export function LevelSelect() {
  const location = useLocation();
  const { from } = location.state;
  let categoryType;

  switch (from) {
    case 0:
      categoryType = "Counting";
      break;
    case 1:
      categoryType = "Addition";
      break;
    case 2:
      categoryType = "Subtraction";
      break;
    case 3:
      categoryType = "Multiplication";
      break;
    case 4:
      categoryType = "Division";
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
                {/* <a className="btn btn-primary"><Link style={{color: 'white',textDecoration: 'none' }} to="/counting">Counting</Link></a> */}
                <h5 className="card-title">Level 1</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <button className="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
                    Level 1
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="cardCont1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Level 4</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <button className="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
                    Under construction!
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="cardCont1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Level 2</h5>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <a className="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
                    Under construction!
                  </Link>
                </a>
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
                <a className="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
                    Under construction!
                  </Link>
                </a>
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
                <a className="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
                    Under construction!
                  </Link>
                </a>
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
                <a className="btn btn-primary">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={level_home}>
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