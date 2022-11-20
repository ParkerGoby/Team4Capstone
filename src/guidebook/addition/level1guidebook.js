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
                        <h2 class="section-heading">How too add numbers???</h2>
                        <p>Addition is important for learning mathematics! Start by
                    starting from the number on the left, and moving forward the
                    number on the right.</p>
                        
                        <h2 class="section-heading">Another heading just cuz</h2>
                        <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
                        <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.</p>
                        <blockquote class="blockquote">The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>
                        <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical process which mankind is carrying out in accordance with the natural laws of human development.</p>
                        <h2 class="section-heading">Reaching for the Stars</h2>
                        <img src={additionimg} alt="../guidebook images/addition.png" />
                        
                    </div>
                </div>
            </div>
        </article>

		</div>
    );
};
export default Level1GuideAddition;