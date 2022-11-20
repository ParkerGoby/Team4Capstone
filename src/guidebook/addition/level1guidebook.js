import React from "react";
import additionimg from "../guidebook images/addi.gif"
// import '../gb_css/gb_styles.css';
const Level1GuideAddition = () => {
    return ( 
        <article className="mb-4" >
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 py-4">
                             <div className="col-md-8 col-lg-6 col-xl-6 my-auto align-middle">
                                <h2 className="section-heading">What is addition?</h2>
                                <p>Addition (usually signified by the plus symbol +) is one of the four basic operations of arithmetic, the other three being subtraction, multiplication and division. Addition is important for learning mathematics! Start by
                                starting from the number on the left, and moving forward the
                                number on the right.</p>
                             </div>
                             <div className="col-md-8 col-lg-6 col-xl-6 text-center">
                                  <img class="rounded d-block mx-auto" src={additionimg} width="60%" alt="../guidebook images/addi.gif" />
                             </div>
                        </div>
                    </div>
                </article>
    );
};
export default Level1GuideAddition;