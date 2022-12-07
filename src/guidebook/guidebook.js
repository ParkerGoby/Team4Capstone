import * as React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./guidebook.css";

export function Category() {
  return (
    <>
      <div className="title-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-1 text-center">
              <h1>Guidebooks</h1>
              <p>
                Guidebooks are an education resource desgined to facilitate
                learning
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-thing">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <Card bg="dark" text="white" className="card">
              <Card.Body>
                <h3 class="text-center">Addition</h3>
              </Card.Body>
              <Card.Img
                className="cardImg"
                variant="top"
                src={require("../assets/addition.png")}
              />
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="../guidebook/addition"
              >
                <div className="d-grid gap-2">
                  <Button className="btn btn-primary">Let's Learn!</Button>
                </div>
              </Link>
            </Card>
          </div>
          <div className="col">
            <Card bg="dark" text="white" className="card">
              <Card.Body>
                <h3 class="text-center">Subtraction</h3>
              </Card.Body>
              <Card.Img
                className="cardImg"
                variant="top"
                src={require("../assets/subtraction.png")}
              />
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="../guidebook/subtraction"
              >
                <div className="d-grid gap-2">
                  <Button className="btn btn-primary">Let's Learn!</Button>
                </div>
              </Link>
            </Card>
          </div>
          <div className="col">
            <Card bg="dark" text="white" className="card">
              <Card.Body>
                <h3 class="text-center">Multiplication</h3>
              </Card.Body>
              <Card.Img
                className="cardImg"
                variant="top"
                src={require("../assets/multiplication.png")}
              />
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="../guidebook/multiplication"
              >
                <div className="d-grid gap-2">
                  <Button className="btn btn-primary">Let's Learn!</Button>
                </div>
              </Link>
            </Card>
          </div>
          <div className="col">
            <Card bg="dark" text="white" className="card">
              <Card.Body>
                <h3 class="text-center">Division</h3>
              </Card.Body>
              <Card.Img
                className="cardImg"
                variant="top"
                src={require("../assets/division.png")}
              />
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="../guidebook/division"
              >
                <div className="d-grid gap-2">
                  <Button className="btn btn-primary">Let's Learn!</Button>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
