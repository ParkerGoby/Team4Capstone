import React from "react";
import commutative from "../guidebook images/commutative.webp";
import identityimg from "../guidebook images/multi.gif";
const Level1GuideMulti = () => {
  return (
    <article className="mb-4">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 py-4">
          <div className="col-md-8 col-lg-6 col-xl-6 my-auto align-middle">
            <h2 className="section-heading">What is Multiplication?</h2>
            <p>
              Multiplication (often denoted by the cross symbol ×, by the
              mid-line dot operator ⋅, by juxtaposition, or, on computers, by an
              asterisk *) is one of the four elementary mathematical operations
              of arithmetic, with the other ones being addition, subtraction,
              and division. The result of a multiplication operation is called a
              product. Multiplication is something that is used often in daily
              life. Learning Multiplication is extremely important!
            </p>
            <p>
              Before we get into multiplication, there are a few rules that we
              have to keep in mind.
            </p>
            <p>
              - Any number multiplied by 0 will always be 0. For example, 10 x 0
              is equal to 0 <br></br>- Any number multipled by 1 will always be
              the number that was multiplied by 1. For example, 4 x 1 is equal
              4. In Addition, a number plus another = is always that always
              <br></br>- Multiplication has the commutative property, which
              means that 4 x 2 is the same as 2 x 4
            </p>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-6 text-center">
            <img
              class="rounded d-block mx-auto"
              src={identityimg}
              width="60%"
              alt="../guidebook images/multi.gif"
            />
          </div>
        </div>
      </div>
    </article>
  );
};
export default Level1GuideMulti;
