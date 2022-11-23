import { write } from '@popperjs/core';
import './login.css';
import React, { useState } from 'react';

 export function QuestionList() {
  var x = Math.floor(Math.random() * 10); //0 and 1
  var y = Math.floor(Math.random() * 10);

  var sum = x + y;
  var opt1 = sum + Math.floor(Math.random() * 10) + 1;
  var opt2 = sum + Math.floor(Math.random() * 10) + 4;
  var opt3 = sum + Math.floor(Math.random() * 10) + 7;



 // const answers = [opt1, opt2, opt3, sum];
/////////////////////////////////////////////////////////////////////////
                  function shuffle(array) {
                    let currentIndex = array.length,  randomIndex;

                    // While there remain elements to shuffle.
                    while (currentIndex !== 0) {

                      // Pick a remaining element.
                      randomIndex = Math.floor(Math.random() * currentIndex);
                      currentIndex--;

                      // And swap it with the current element.
                      [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex], array[currentIndex]];
                    }

                    return array;
                  }

                  // Used like so
                  var answers = [opt1, opt2, opt3, sum];
                  shuffle(answers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function render() {
//     const [value, setValue] = useState();

//     const Refresh = ()=> {
//         setValue({});
//     }
// }

function refreshPage() {
    window.location.reload(false);
  }

  function answer_1() {
    var correct_answer = sum
    console.log(correct_answer)
    var current_answer = answers[0]
    console.log(current_answer)
    if (correct_answer == current_answer) {
        alert("correct answer")
        render()
    }    else {
        alert("incorrect answer...try again boomer")
    }
  }

  function answer_2() {
    var correct_answer = sum
    console.log(correct_answer)
    var current_answer = answers[1]
    console.log(current_answer)
    if (correct_answer == current_answer) {
        alert("correct answer")
        render()
        
    }    else {
        alert("incorrect answer...try again boomer")
    }

  }

  function answer_3() {
    var correct_answer = sum
    console.log(correct_answer)
    var current_answer = answers[2]
    console.log(current_answer)
    if (correct_answer == current_answer) {
        alert("correct answer")
        render()
    }    else {
        alert("iincorrect answer...try again boomerr")
    }
  }

  function answer_4() {
    var correct_answer = sum
    console.log(correct_answer)
    var current_answer = answers[3]
    console.log(current_answer)
    if (correct_answer == current_answer) {
        alert("correct answer")
        render()
    }    else {
        alert("incorrect answer...try again boomer")
    }
  }

  function render() {
    // let { daddy_div } = this.props;
    // let { classNames } = this.state;
    
    // let transition = {
    //     transitionName: "example",
    //     transitionEnterTimeout: 500,
    //     transitionLeaveTimeout: 300
    // }


    ("#daddy_div").load(window.location.href + "#daddy_div")
    // window.location.reload()
  }

 
    

 function checkAnswer(e) {
    let { isAnswered } = this.props;
    
    if(!isAnswered) {
        let elem = e.currentTarget;
        let { correct, increaseScore } = this.props;
        let answer = Number(elem.dataset.id);
        let updatedClassNames = this.state.classNames;

        if(answer === correct){
            updatedClassNames[answer-1] = 'right';
            increaseScore();
        }
        else {
            updatedClassNames[answer-1] = 'wrong';
        }
        
        this.setState({
            classNames: updatedClassNames
        })

        this.props.showButton();
    }
}
// const [index, setQuestion] = useState(0);

    return (
        <>
        <div id="daddy_div">    

            <div className="title-container">        
            <div className="container-fluid">
            
                <div className="row">
                <div className="col-xs-1 text-center question"><h1>What is {x} + {y}?</h1></div>
                </div>
            </div>
            </div>
        
        <div className="container-thing questionOptions">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="btn btn-outline-dark card">
                    {/* <div className="card-body" onClick={() => alert('click detected')}> */}
                    <div className="card-body" onClick={answer_1}>
                        <h5 className="card-title text-center align-middle" ><h2 id="h2_opt0">{answers[0]}</h2></h5>
                        {/* <button onClick={() => alert('click caught')}>click me</button> */}
                        { /*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>*/}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="btn btn-outline-dark card">
                    <div className="card-body" onClick={answer_2}>
                        <h5 className="card-title text-center align-middle"><h2>{answers[1]}</h2></h5>
                        { /*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="btn btn-outline-dark card">
                    <div className="card-body"  onClick={answer_3}>
                        <h5 className="card-title text-center align-middle"><h2 id="h2_div3">{answers[2]}</h2></h5>
                        { /* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="btn btn-outline-dark card">
                    <div className="card-body" onClick={answer_4}>
                        <h5 className="card-title text-center align-middle"><h2>{answers[3]}</h2></h5>
                        { /*<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                       { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
            </div>
            </div>
           </div>
           </>
    )
}
 
    

export default QuestionList