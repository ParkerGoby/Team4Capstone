import * as React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

var categoryType;

export function Category() {
  function clickHandler(typeSelection) {
    categoryType = typeSelection;
  }

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
                src={require("./assets/counting.jpg")}
              />
              <Card.Body>
                <Card.Title>Counting</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Button className="btn btn-primary" onClick={clickHandler(0)}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/categoryTypes/categoryMath"
                  state={{ from: categoryType }}
                >
                  Let's Learn!
                </Link>
              </Button>
            </Card>
          </div>
          <div className="col">
            <Card bg="dark" text="white" className="card">
              <Card.Img
                className="cardImg"
                variant="top"
                src={require("./assets/addition.png")}
              />
              <Card.Body>
                <Card.Title>Addition</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Button className="btn btn-primary" onClick={clickHandler(1)}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/categoryTypes/categoryMath"
                  state={{ from: categoryType }}
                >
                  Let's Learn!
                </Link>
              </Button>
            </Card>
          </div>
          <div className="col">
            <Card bg="dark" text="white" className="card">
              <Card.Img
                className="cardImg"
                variant="top"
                src={require("./assets/subtraction.jpg")}
              />
              <Card.Body>
                <Card.Title>Subtraction</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Button className="btn btn-primary" onClick={clickHandler(2)}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/categoryTypes/categoryMath"
                  state={{ from: categoryType }}
                >
                  Let's Learn!
                </Link>
              </Button>
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
                <Card.Title>Multiplication</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Button className="btn btn-primary" onClick={clickHandler(3)}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/categoryTypes/categoryMath"
                  state={{ from: categoryType }}
                >
                  Let's Learn!
                </Link>
              </Button>
            </Card>
          </div>
          <div className="col">
            <Card bg="dark" text="white" className="card">
              <Card.Img
                className="cardImg"
                variant="top"
                src={require("./assets/division.jpg")}
              />
              <Card.Body>
                <Card.Title>Division</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Button className="btn btn-primary" onClick={clickHandler(4)}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/categoryTypes/categoryMath"
                  state={{ from: categoryType }}
                >
                  Let's Learn!
                </Link>
              </Button>
            </Card>
          </div>
          <div className="col">
            <Card bg="dark" text="white" className="card">
              <Card.Img
                className="cardImg"
                variant="top"
                src={require("./assets/fractions.jpg")}
              />
              <Card.Body>
                <Card.Title>Fractions</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Button className="btn btn-primary" onClick={clickHandler(5)}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/categoryTypes/categoryMath"
                  state={{ from: categoryType }}
                >
                  Let's Learn!
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
