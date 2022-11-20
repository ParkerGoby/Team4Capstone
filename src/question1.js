import './login.css';

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



// const [index, setQuestion] = useState(0);

    return (
        <>        
            <div class="title-container">        
            <div class="container-fluid">
            
                <div class="row">
                <div class="col-xs-1 text-center question"><h1>What is {x} + {y}?</h1></div>
                </div>
            </div>
            </div>
        
        <div class="container-thing questionOptions">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle"><h2>{answers[0]}</h2></h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>*/}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle"><h2>{answers[1]}</h2></h5>
                        { /*<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>*/}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle"><h2>{answers[2]}</h2></h5>
                        { /* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        { /* <p>Addition</p> */ }
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="btn btn-outline-dark card">
                    <div class="card-body">
                        <h5 class="card-title text-center align-middle"><h2>{answers[3]}</h2></h5>
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