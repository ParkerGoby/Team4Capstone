import * as React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

var categoryType;

export function Category() {
  if (sessionStorage.getItem("token") === null) {
    return(
    <h3 className="text-center">Login to begin your learning journey!</h3>)
  }
  else{
    return (
      <>
        <div className="title-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-1 text-center">
                <h1>Categories</h1>
                <p>Select one of the subjects below to start learning!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-thing">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <Card bg="dark" text="white" className="card">
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={require("./assets/addition.png")}
                />
                <Card.Body>
                  <h3 className="text-center">Addition</h3>
                </Card.Body>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/addition-levels"
                >
                  <div className="d-grid gap-2">
                    <Button>Let's Learn!</Button>
                  </div>
                </Link>
              </Card>
            </div>
            <div className="col">
              <Card bg="dark" text="white" className="card">
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={require("./assets/subtraction.png")}
                />
                <Card.Body>
                  <h3 className="text-center">Subtraction</h3>
                </Card.Body>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/subtraction-levels"
                >
                  <div className="d-grid gap-2">
                    <Button>Let's Learn!</Button>
                  </div>
                </Link>
              </Card>
            </div>
            <div className="col">
              <Card bg="dark" text="white" className="card">
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={require("./assets/multiplication.png")}
                />
                <Card.Body>
                  <h3 className="text-center">Multiplication</h3>
                </Card.Body>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/multiplication-levels"
                >
                  <div className="d-grid gap-2">
                    <Button>Let's Learn!</Button>
                  </div>
                </Link>
              </Card>
            </div>
            <div className="col">
              <Card bg="dark" text="white" className="card">
                <Card.Img
                  className="cardImg"
                  variant="top"
                  src={require("./assets/division.png")}
                />
                <Card.Body>
                  <h3 className="text-center">Division</h3>
                </Card.Body>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/division-levels"
                >
                  <div className="d-grid gap-2">
                    <Button>Let's Learn!</Button>
                  </div>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
  }

export default Category;
