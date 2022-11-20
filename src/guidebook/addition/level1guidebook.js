import React from "react";
import additionimg from "../guidebook images/addition.png"
// import '../gb_css/gb_styles.css';
const Level1GuideAddition = () => {
    return ( 
        <div>
			{/* <h1>
                How to add numbers.
            </h1>
            <div>
                <p>
                    Addition is important for learning mathematics! Start by
                    starting from the number on the left, and moving forward the
                    number on the right.
                </p>
                
            </div> */}
            <br></br>
            <article class="mb-4" >
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <h2 class="section-heading">What is addition?</h2>
                        <p>Addition (usually signified by the plus symbol +) is one of the four basic operations of arithmetic, the other three being subtraction, multiplication and division. Addition is important for learning mathematics! Start by
                    starting from the number on the left, and moving forward the
                    number on the right.</p>
                    
                        <img src={additionimg} alt="../guidebook images/addition.png" />
                        
                    </div>
                </div>
            </div>
        </article>

		</div>
    );
};
export default Level1GuideAddition;