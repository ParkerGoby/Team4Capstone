import React from "react";
import multiplicationimg from "../guidebook images/multi.gif";
const MultiplicationGuide = () => {
  return (
    <article className="mb-4" >
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 py-4">
                             <div className="col-md-8 col-lg-6 col-xl-6 my-auto align-middle">
                                <h2 className="section-heading">What is multiplication?</h2>
                                <p>Multiplication (usually signified by the times symbol x) is one of the four basic operations of arithmetic, the other three being 
                                addition, subtraction, and division. We start at the number on the left, and add the number
                                to itself the number of times the number on the right. In this example, we have 3 stars and we are multiplying it 4 times
                                (3 + 3 + 3 + 3), giving us 12 stars.
                                This can be written 3 x 4 = 12.</p>
                             </div>
                             <div className="col-md-8 col-lg-6 col-xl-6 text-center">
                                  <img class="rounded d-block mx-auto" src={multiplicationimg} width="60%" alt="../guidebook images/addi.gif" />
                             </div>
                        </div>
                    </div>
                </article>
  );
};
export default MultiplicationGuide;
