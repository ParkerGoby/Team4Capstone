import React from "react";
import divisionimg from "../guidebook images/division.gif"
// import '../gb_css/gb_styles.css';
const DivisionGuide = () => {
    return ( 
        <article className="mb-4" >
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 py-4">
                             <div className="col-md-8 col-lg-6 col-xl-6 my-auto align-middle">
                                <h2 className="section-heading">What is division?</h2>
                                <p>Division (usually signified by the plus symbol ÷) is one of the four basic operations of arithmetic, the other three being 
                                addition, subtraction, and multiplication. Division is important for learning mathematics! We 
                                start with the number of stars on the left, and make groups with the number on the right. Then, we count
                                how many groups we have. In this case, we start with 6 stars and make groups of 3 stars, leaving us with 2 groups.
                                This can be written as 6 ÷ 3 = 2.</p>
                             </div>
                             <div className="col-md-8 col-lg-6 col-xl-6 text-center">
                                  <img class="rounded d-block mx-auto" src={divisionimg} width="60%" alt="../guidebook images/addi.gif" />
                             </div>
                        </div>
                    </div>
                </article>
    );
};
export default DivisionGuide;