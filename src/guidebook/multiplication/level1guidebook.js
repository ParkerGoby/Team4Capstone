import React from "react";
import commutative from "../guidebook images/commutative.webp"
import identityimg from "../guidebook images/identity.webp"
const Level1GuideMulti = () => {
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
                <h2 id="section_heading">What is Multiplication?</h2>
            <p>Multiplication is something that is used often in daily life. Learning Multiplication is extremely important!</p>
            <p>Before we get into multiplication, there are a few rules that we have to keep in mind.</p>
            <p>- Any number multiplied by 0 will always be 0. For example, 10 X 0 is equal to 0 <br></br>
                - Any number multipled by 1 will always be the number that was multiplied by 1. For example, 4 X 1 is equal 4. In Addition, a number plus another = is always that always<br></br>
               
              
                - Multiplication has the commutative property, which means that 4 X 2 is the same as 2 X 4
            </p>
                   
                    <img src={commutative} alt="../guidebook images/commutative.webp" />
                    
                </div>
            </div>
        </div>
    </article>

    </div>

        
    );
};
export default Level1GuideMulti;