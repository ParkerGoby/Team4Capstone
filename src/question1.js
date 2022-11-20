import { useState } from "react"
import './login.css';

 export function QuestionList() {
let questions = [
  {
    id: 1,
    question: "What is 2+2?",
    answer: "4",
    options: [
      "3", "2", "5", "4",
    ],
  },
  {
    id: 2,
    question: "What is 3+7?",
    answer: "10",
    options: [
      "8", "10", "14", "12", 
      ],
  },
  {
    id: 3,
    question: "What is 12+17",
    answer: "29",
    options: [
      "31", "30", "29", "39",
    ],
  },
  {
    id: 4,
    question: "What is 27 + 36",
    answer: "63",
    options: [
      "63", "73", "61", "53",
    ],
  },
  {
    id: 5,
    question: "What is 65 + 29",
    answer: "94",
    options: [
      "95", "84", "90", "94",
    ],
  },
];

function randomizeQuestions(){

}

const [index, setQuestion] = useState(0);

const answerButtonListener = (correctAnswerSel) => {
  const nextQ = index + 1;
  if (nextQ < questions.length) {
    setQuestion(nextQ)
  }
  else {
    return ("Incorrect. Try again.")
  }
}
    return (
        <>        
            <div class="title-container">        
            <div class="container-fluid">
            
                <div class="row">
                <div class="col-xs-1 text-center question"><h1>
                  {questions[index].question}</h1></div>
                </div>
            </div>
            </div>
        
        <div class="container-thing questionOptions">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle">{questions[index].options[0]}</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>*/}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle">{questions[index].options[1]}</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle">{questions[index].options[2]}</h5>
                        { /* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle">{questions[index].options[3]}</h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                       { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </>
    )
}

    

export default QuestionList