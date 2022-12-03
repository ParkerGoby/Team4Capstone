import React from "react";
import subtractionimg from "../guidebook images/subtraction.gif"
// import '../gb_css/gb_styles.css';
const SubtractionGuide = () => {
    return ( 
        <article className="mb-4" >
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 py-4">
                 <div className="col-md-8 col-lg-6 col-xl-6 my-auto align-middle">
                    <h2 className="section-heading">What is subtraction?</h2>
                    <p>Addition (usually signified by the minus symbol -) is one of the four basic operations of arithmetic, the other three being addition, multiplication and division.
                    Subtraction is important for learning mathematics! We take the number on the left
                    and remove the number on the right from it. If we have 5 stars and an alien destroys 2 stars, we are left with 3 stars.
                    This can be written as 5 - 2 = 3.</p>
                 </div>
                 <div className="col-md-8 col-lg-6 col-xl-6 text-center">
                      <img class="rounded d-block mx-auto" src={subtractionimg} width="60%" alt="../guidebook images/addi.gif" />
                 </div>
            </div>
        </div>
    </article>
    );
};
export default SubtractionGuide;