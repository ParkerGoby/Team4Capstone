    var x = Math.floor(Math.random() * 10); //0 and 1
    var y = Math.floor(Math.random() * 10);

    var sum = x + y;
    var opt1 = sum + Math.floor(Math.random() * 10) + 1;
    var opt2 = sum + Math.floor(Math.random() * 10) + 4;
    var opt3 = sum + Math.floor(Math.random() * 10) + 7;

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
  let rightAnswerIndex;
    if (sum == answers[0]) {
        rightAnswerIndex = 1;
    }
    if (sum == answers[1]) {
        rightAnswerIndex = 2;
    }
    if (sum == answers[2]) {
        rightAnswerIndex = 3;
    }
    if (sum == answers[3]) {
        rightAnswerIndex = 4;
    }

export default [
    {
        question: `What is ${x} + ${y}`,
        answers: [
            `${answers[0]}`,
            `${answers[1]}`,
            `${answers[2]}`,
            `${answers[3]}`
        ],
        correct: rightAnswerIndex,
    },
    {
        question: `What is ${x} + ${y}`,
        answers: [
            `${answers[0]}`,
            `${answers[1]}`,
            `${answers[2]}`,
            `${answers[3]}`
        ],
        correct: rightAnswerIndex,
    }
]